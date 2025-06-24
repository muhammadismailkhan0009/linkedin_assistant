import { DataExchangeService } from "services/DataExchangeService";
import { scrapePost } from "./scrapePost";
import { storeGeneratedComment } from "./storeGeneratedComment";

export async function runScraper() {
    const url = window.location.href;// provides url access in in-active tabs as well
    let scrapedPost = await scrapePost();
    let generatedComment = await new DataExchangeService().sendPostToBackend(scrapedPost, "");
    storeGeneratedComment(generatedComment.payload, url);
}