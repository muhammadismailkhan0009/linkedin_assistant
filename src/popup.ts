import { checkClipboardOnClick } from "@actions/popup/checkClipboardOnClick";
import { displayGeneratedComment } from "@actions/popup/displayGeneratedComment";


// FIXME: is this run-time event?
chrome.storage.local.get("generatedComment", (data) => {
    if (data.generatedComment) {
        displayGeneratedComment(data.generatedComment);
    }
});

function processClipboard() {
    // 1- detect when button is clicked
    console.log("processing clipboard");
    let button = document.getElementById("process-clipboard");
    button?.addEventListener("click", checkClipboardOnClick);
}

document.addEventListener("DOMContentLoaded", processClipboard);

