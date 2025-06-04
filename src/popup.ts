import { checkClipboardOnClick } from "@actions/checkClipboardOnClick";
import { displayGeneratedComment } from "@actions/displayGeneratedComment";


// FIXME: is this run-time event?
chrome.storage.local.get("generatedComment", (data) => {
    console.log("ran this logic");
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

