import { displayGeneratedComment } from "@actions/popup/displayGeneratedComment";
import { getGeneratedComment } from "@actions/popup/getGeneratedComment";
import React, { useEffect } from "react";
export function DisplayComment() {

    useEffect(() => {
        getGeneratedComment().then((comment) => {
            if (comment) {
                console.log(comment);
                displayGeneratedComment(comment);
            }
        });
    }, []);

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