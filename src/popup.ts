import { checkClipboardOnClick } from "@actions/checkClipboardOnClick";

/// <reference path="content.ts">
function updatePopupWithComment(comment: string) {
    const commentBox = document.getElementById("comment-box") as HTMLTextAreaElement;
    const copyButton = document.getElementById("copy-btn") as HTMLButtonElement;

    if (commentBox && copyButton) {
        commentBox.value = comment;
        copyButton.disabled = false;

        copyButton.onclick = async () => {
            try {
                await navigator.clipboard.writeText(commentBox.value);
                copyButton.innerText = "Copied!";
                commentBox.value = "";
                await chrome.storage.local.set({ generatedComment: "" });
                setTimeout(() => (copyButton.innerText = "Copy Comment"), 1500);
            } catch (err) {
                console.error("❌ Failed to copy:", err);
            }
        };
    }
}

chrome.storage.local.get("generatedComment", (data) => {
    console.log("ran this logic");
    if (data.generatedComment) {
        updatePopupWithComment(data.generatedComment);
    }
});

function processClipboard() {
    // 1- detect when button is clicked
    console.log("processing clipboard");
    let button = document.getElementById("process-clipboard");
    button?.addEventListener("click", checkClipboardOnClick);
}

document.addEventListener("DOMContentLoaded", processClipboard);

