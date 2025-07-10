import { ContentActions } from "public/types/ContentActions";
import React, { useState } from "react";
import { DataExchangeService } from "services/DataExchangeService";
import { Action } from "public/types/Action";
import { generateUserJourneyId, getUserJourneyId } from "@actions/content/generateUserJourneyId";
import { JourneyType } from "@actions/types/JourneyType";
import { PostCreationJourney } from "tracing/UserJourneyUtils";
import { PostCreationJourneySteps, StepInfo } from "tracing/UserJourneyStepUtils";



export function GeneratePost({ setState, setGeneratedPost }: Readonly<ContentActions>) {
    const [userInput, setUserInput] = useState("");
    const [loading, setLoading] = useState(false);


    const handleGenerate = async () => {

        // start post creation journey
        generateUserJourneyId(JourneyType.POST_CREATION);
        const journeyId = await getUserJourneyId(JourneyType.POST_CREATION);
        PostCreationJourney.startJourney(journeyId);

        console.log("user input fed");
        if (!userInput.trim()) return;

        setLoading(true); // show loading state

        console.log("sending request");
        const content = await new DataExchangeService().generatePost(userInput);
        setGeneratedPost?.(content.payload);
        setState(Action.display_post);

        setLoading(false); // reset loading

        // step 1:
        const stepInfo: StepInfo = {
            journeyId: journeyId,
            inputContent: userInput,
            outputContent: content.payload,

        }
        PostCreationJourneySteps.generated(stepInfo);
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
