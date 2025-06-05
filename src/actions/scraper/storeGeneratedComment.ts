export async function storeGeneratedComment(comment: string) {
    await chrome.storage.local.set({ generatedComment: comment });
}