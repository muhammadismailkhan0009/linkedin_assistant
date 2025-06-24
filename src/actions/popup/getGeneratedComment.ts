import { getCurrentTabUrlOnFetching } from "services/TabUtils";

export async function getGeneratedComment(): Promise<string | null> {
    const url = await getCurrentTabUrlOnFetching();
    console.log("current_url:" + url);

    if (!url) return null;

    const key = `comment-${url}`;
    console.log("key:" + key);
    return new Promise((resolve) => {
        chrome.storage.local.get([key], (result) => {
            resolve(result[key] ?? null);
        });
    });
}
