import React, { useEffect, useState } from "react";
import { traceWhetherCopied } from "tracing/traceWhetherCopied";
import { ContentType } from "tracing/types/TraceMetrics";

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

            traceWhetherCopied("instructions", localPost, ContentType.POST);

            setTimeout(() => setCopied(false), 1500);
            setTimeout(() => setLocalPost(""), 1500);
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
