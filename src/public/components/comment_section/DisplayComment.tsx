import React, { useEffect, useState } from "react";
import { getGeneratedComment } from "./actions/getGeneratedComment";
import { CommentCreationJourneySteps, StepInfo } from "tracing/UserJourneyStepUtils";
import { getUserJourneyId } from "@actions/content/generateUserJourneyId";
import { JourneyType } from "@actions/types/JourneyType";
export function DisplayComment() {
    const [comment, setComment] = useState<string>("");
    const [copied, setCopied] = useState<boolean>(false);

    useEffect(() => {
        console.log("checking if comment is there");
        getGeneratedComment().then((comment) => {
            if (comment) {
                setComment(comment);
            }
        });
    }, []);

    async function handleCopy() {

        try {
            const journeryId = await getUserJourneyId(JourneyType.COMMENT_CREATION);
            // CCJ step 2: comment is copied
            await navigator.clipboard.writeText(comment);

            const stepData: StepInfo = {
                journeyId: journeryId,
                inputContent: comment,
                outputContent: comment,
            }
            CommentCreationJourneySteps.copied(stepData);
            setCopied(true);
            setTimeout(() => setComment(""), 1500);
            // setTimeout(() => setCopied(false), 1500);
        } catch (err) {
            console.error("❌ Failed to copy:", err);
        }
    }

    if (!comment) return null;

    return (
        <>
            <textarea
                id="comment-box"
                readOnly
                value={comment}
                className="w-full h-24 border p-2 rounded"
            />
            <button
                id="copy-btn"
                onClick={handleCopy}
                disabled={!comment || copied}
                className="mt-2 w-full bg-blue-500 text-white py-1 rounded disabled:opacity-50"
            >
                {copied ? "Copied!" : "Copy Comment"}
            </button>
        </>
    );
}