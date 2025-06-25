export function showInProcess() {
    chrome.runtime.sendMessage({ type: "SET_BADGE", status: "loading" });
}

export function showCommentIsReady() {
    chrome.runtime.sendMessage({ type: "SET_BADGE", status: "ready" });
}