import { DataExchangeService } from "services/DataExchangeService";
import { scrapePost } from "./scrapePost";
import { storeGeneratedComment } from "./storeGeneratedComment";

export async function runScraper() {
    let scrapedPost = await scrapePost();
    let generatedComment = await new DataExchangeService().sendPostToBackend(scrapedPost, "");
    storeGeneratedComment(generatedComment);
}