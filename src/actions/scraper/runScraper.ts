import { DataExchangeService } from "services/DataExchangeService";
import { scrapePost } from "./scrapePost";
import { storeGeneratedComment } from "./storeGeneratedComment";
import { showCommentIsReady, showInProcess } from "@actions/popup/displayBadgeStatus";

export async function runScraper() {
    showInProcess();

    const url = window.location.href;// provides url access in in-active tabs as well
    let scrapedPost = await scrapePost();
    let generatedComment = await new DataExchangeService().sendPostToBackend(scrapedPost, "");
    storeGeneratedComment(generatedComment.payload, url);

    showCommentIsReady();

}