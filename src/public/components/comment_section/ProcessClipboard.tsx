import React from "react";

export function ProcessClipboard() {


    return (

        <button onClick={checkClipboardOnClick} id="process-clipboard">Generate Comment</button>

    )
}

let lastClipboard = "";

function isLinkedInPostUrl(url: string) {
    return /^https:\/\/www\.linkedin\.com\/posts\//.test(url.trim());
}

async function checkClipboardOnClick() {
    console.log("clickboard checking")
    try {
        const text = await navigator.clipboard.readText();

        if (text && text !== lastClipboard && isLinkedInPostUrl(text)) {
            lastClipboard = text;
            console.log("📋 Copied LinkedIn Post URL:", text);

            chrome.runtime.sendMessage({
                type: "OPEN_POST_TAB",
                url: text
            });
        }
    } catch (err) {
        console.warn("Clipboard access error:", err);
    }
}

