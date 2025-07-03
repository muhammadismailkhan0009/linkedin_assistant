
export async function storeGeneratedComment(comment: string, url: string | null) {
    if (!url) return;

    const key = `comment-${url}`;
    await chrome.storage.local.set({ [key]: comment });
    console.log("comment stored:" + comment);
}
