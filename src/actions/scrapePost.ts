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
        let comment = await sendPostToBackend(postText, "");
        console.log("output data:" + comment.payload);
        generatedComment = comment.payload;
        await chrome.storage.local.set({ generatedComment: comment.payload });

    } else {
        console.error("❌ [Scraper] Failed to find or extract post text.");
    }
}