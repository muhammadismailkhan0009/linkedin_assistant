import { ContentActions } from "public/types/ContentActions";
import React, { useState } from "react";
import { DataExchangeService } from "services/DataExchangeService";
import { Action } from "public/types/Action";



export function GeneratePost({ setState, setGeneratedPost }: Readonly<ContentActions>) {
    const [userInput, setUserInput] = useState("");
    const [loading, setLoading] = useState(false);


    const handleGenerate = async () => {
        console.log("user input fed");
        if (!userInput.trim()) return;

        setLoading(true); // show loading state

        console.log("sending request");
        const content = await new DataExchangeService().generatePost(userInput);
        setGeneratedPost?.(content.payload);
        setState(Action.display_post);

        setLoading(false); // reset loading
    };

    return (
        <>
            <textarea
                id="input-box"
                placeholder="Write your idea here..."
                value={userInput}

                onChange={(e) => setUserInput(e.target.value)}
            />
            <button onClick={handleGenerate}
                disabled={!userInput.trim() || loading}>
                {loading ? "Generating..." : "Generate Post"}
            </button>
        </>
    );
}
