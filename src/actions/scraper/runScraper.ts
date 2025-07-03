import { DataExchangeService } from "services/DataExchangeService";
import { scrapePost } from "./scrapePost";
import { storeGeneratedComment } from "./storeGeneratedComment";
import { showCommentIsReady, showInProcess } from "@actions/popup/displayBadgeStatus";
import { traceWhetherGenerated } from "tracing/traceWhetherGenerated";
import { ContentType } from "tracing/types/TraceMetrics";

export async function runScraper() {
    showInProcess();

    const url = window.location.href;// provides url access in in-active tabs as well
    let scrapedPost = await scrapePost();
    let generatedComment = await new DataExchangeService().sendPostToBackend(scrapedPost, "");
    storeGeneratedComment(generatedComment.payload, url);

    showCommentIsReady();

    traceWhetherGenerated(scrapedPost, generatedComment.payload, ContentType.COMMENT);

}