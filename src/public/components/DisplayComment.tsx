import { displayGeneratedComment } from "@actions/popup/displayGeneratedComment";
import React from "react";
export function DisplayComment() {

    // FIXME: is this run-time event?
    chrome.storage.local.get("generatedComment", (data) => {
        console.log(data);

        if (data.generatedComment) {
            displayGeneratedComment(data.generatedComment.payload);
        }
    });
    return (
        <>
            <textarea
                id="comment-box"
                readOnly
                placeholder="Generated comment will appear here..."
            ></textarea>
            <button
                id="copy-btn"
                disabled
            >Copy Comment</button>
        </>

    )
}