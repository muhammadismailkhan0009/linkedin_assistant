import { DataExchangeService } from "services/DataExchangeService";
import { scrapePost } from "./scrapePost";
import { storeGeneratedComment } from "./storeGeneratedComment";
import { showCommentIsReady, showInProcess } from "@actions/popup/displayBadgeStatus";
import { generateUserJourneyId, getUserJourneyId } from "./generateUserJourneyId";
import { CommentCreationJourney } from "tracing/UserJourneyUtils";
import { CommentCreationJourneySteps, StepInfo } from "tracing/UserJourneyStepUtils";
import { checkIfCommentisPostedOrNot } from "./checkifCommentisPostedOrNot";
import { JourneyType } from "@actions/types/JourneyType";

export async function runScraper() {

    // comment creation journey
    await generateUserJourneyId(JourneyType.COMMENT_CREATION);
    const journeyId = await getUserJourneyId(JourneyType.COMMENT_CREATION);
    console.log("journey_id_at_start:", journeyId);
    CommentCreationJourney.startJourney(journeyId);

    showInProcess();

    // comment creation journey starts(CCJ)
    const url = window.location.href;// provides url access in in-active tabs as well
    let scrapedPost = await scrapePost();
    let generatedComment = await new DataExchangeService().sendPostToBackend(scrapedPost, "");
    storeGeneratedComment(generatedComment.payload, url);

    showCommentIsReady();

    // step 1- comment is generated
    const stepData: StepInfo = {
        journeyId: journeyId,
        inputContent: scrapedPost,
        outputContent: generatedComment.payload,
    }
    CommentCreationJourneySteps.generated(stepData);

    checkIfCommentisPostedOrNot();
    // step 3- run event listener to fetch the posted comment on linkedin
    document.addEventListener("CommentPostedEvent", (e: Event) => {
        const { finalContent } = (e as CustomEvent).detail;

        const postedStep: StepInfo = {
            journeyId,
            inputContent: generatedComment.payload,
            outputContent: finalContent,

        };

        CommentCreationJourneySteps.posted(postedStep);
        CommentCreationJourney.endJourney(journeyId);
    });

}