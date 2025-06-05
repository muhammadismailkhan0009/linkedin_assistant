import { DataExchangeService } from "services/DataExchangeService";

let generatedComment = "";
export async function scrapePost() {
    console.log("⏳ [Scraper] Waiting for DOM to load...");

    if (document.readyState === "loading") {
        await new Promise((resolve) => document.addEventListener("DOMContentLoaded", resolve));
        console.log("✅ [Scraper] DOM fully loaded.");
    } else {
        console.log("✅ [Scraper] DOM was already ready.");
    }

    const postSelector = '.update-components-update-v2__commentary span[dir="ltr"]';

    const postText = await waitForPostText(postSelector);

    if (postText) {
        // let dataExchangeService = new DataExchangeService();
        // let comment = await dataExchangeService.sendPostToBackend(postText, "");
        // console.log("output data:" + comment.payload);
        // generatedComment = comment.payload;
        // await chrome.storage.local.set({ generatedComment: comment.payload });
        return postText;

    } else {
        console.error("❌ [Scraper] Failed to find or extract post text.");
        throw new Error("post could not be extracted");
    }
}

function waitForPostText(selector: string, timeout = 10000): Promise<string | null> {
    return new Promise((resolve) => {
        const startTime = Date.now();

        const interval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const element = document.querySelector(selector) as HTMLElement;

            if (element) {
                console.log("✅ [Scraper] Found post text element.");
                clearInterval(interval);
                resolve(element.innerText.trim());
            }

            if (elapsed >= timeout) {
                console.warn("⚠️ [Scraper] Timeout: Post text not found.");
                clearInterval(interval);
                resolve(null);
            }
        }, 500);
    });
}