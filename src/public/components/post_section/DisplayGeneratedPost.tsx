import { getUserJourneyId } from "@actions/content/generateUserJourneyId";
import { JourneyType } from "@actions/types/JourneyType";
import React, { useEffect, useState } from "react";
import { PostCreationJourneySteps, StepInfo } from "tracing/UserJourneyStepUtils";

export function DisplayGeneratedPost({ generatedPost }: Readonly<{ generatedPost: string }>) {

    const [copied, setCopied] = useState(false);
    const [localPost, setLocalPost] = useState(generatedPost);

    useEffect(() => {
        setLocalPost(generatedPost);
    }, [generatedPost]);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(localPost);
            setCopied(true);

            setTimeout(() => setLocalPost(""), 1500);

            //step 2 send journey step info
            const journeryId = await getUserJourneyId(JourneyType.POST_CREATION);
            const stepData: StepInfo = {
                journeyId: journeryId,
                inputContent: localPost,
                outputContent: localPost,
            }
            PostCreationJourneySteps.copied(stepData);


        } catch (err) {
            console.error("❌ Failed to copy:", err);
        }
    };

    if (!localPost) return null;

    return (
        <>
            <textarea
                id="output-box"
                readOnly
                value={localPost}
                placeholder="Generated post will appear here..."
                className="w-full h-32 p-2 border border-gray-300 rounded"
            />
            <button
                onClick={handleCopy}
                className="mt-2 w-full bg-blue-500 text-white py-1 rounded"
                disabled={!localPost || copied}
            >
                {copied ? "Copied!" : "Copy"}
            </button>
        </>
    );

}
