import { DataExchangeService } from "services/DataExchangeService";
import { ContentType, StepType, UserJourneyStep } from "./types/UserJourneyStep";

const dataExchangeService = new DataExchangeService();
export const CommentCreationJourneySteps = {
    generated(stepInfo: StepInfo): void {

        const journeyStep: UserJourneyStep = {
            journeyId: stepInfo.journeyId,
            stepNumber: 1,
            stepType: StepType.GENERATED,
            contentType: ContentType.COMMENT,
            inputContent: stepInfo.inputContent,
            outputContent: stepInfo.outputContent,
        }
        dataExchangeService.sendJourneyStepInfo(journeyStep);
        console.log("comment generated step sent");
    },
    copied(stepInfo: StepInfo): void {

        const journeyStep: UserJourneyStep = {
            journeyId: stepInfo.journeyId,
            stepNumber: 2,
            stepType: StepType.COPIED,
            contentType: ContentType.COMMENT,
            inputContent: stepInfo.inputContent,
            outputContent: stepInfo.outputContent,
        }
        dataExchangeService.sendJourneyStepInfo(journeyStep);
        console.log("comment copied step sent");
    },

    posted(stepInfo: StepInfo): void {

        const journeyStep: UserJourneyStep = {
            journeyId: stepInfo.journeyId,
            stepNumber: 3,
            stepType: StepType.POSTED,
            contentType: ContentType.COMMENT,
            inputContent: stepInfo.inputContent,
            outputContent: stepInfo.outputContent,
        }
        dataExchangeService.sendJourneyStepInfo(journeyStep);
        console.log("comment post event ran");
        console.log("comment posted step sent:", stepInfo.outputContent);
    }

}

export type StepInfo = {
    journeyId: string,
    inputContent: string,
    outputContent: string,
}

export const PostCreationJourneySteps = {


    generated(stepInfo: StepInfo) {
        console.log("post generation info sent");
    },

    copied(stepInfo: StepInfo) {
        console.log("post copied info sent");
    },

    posted(stepInfo: StepInfo) {
        console.log("post posted info sent");
    },
}