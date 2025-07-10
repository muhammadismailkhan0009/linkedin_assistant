import { JourneyType } from "@actions/types/JourneyType";
import { generateToken } from "background/generateTokenOnInstall";

export async function generateUserJourneyId(journeyType: JourneyType): Promise<void> {
    const secret = "your-very-secret-key"; // hardcoded for now
    const id = crypto.randomUUID(); // unique per install

    const token = await generateToken(secret, id);

    if (journeyType === JourneyType.COMMENT_CREATION) {
        const commentCreationJourney = token;
        chrome.storage.local.set({ commentCreationJourney }, () => {
            console.log("Comment creation token generated and saved:", token);
        });
    }
    else if (journeyType === JourneyType.POST_CREATION) {
        const postCreationJourney = token;
        chrome.storage.local.set({ postCreationJourney }, () => {
            console.log("post creatin token generated and saved:", token);
        });
    }
}

export async function getUserJourneyId(journeyType: JourneyType): Promise<string> {
    if (journeyType === JourneyType.COMMENT_CREATION) {
        return new Promise((resolve) => {
            chrome.storage.local.get(["commentCreationJourney"], (result) => {
                resolve(result.commentCreationJourney ?? null);
            });
        });
    }
    else if (journeyType === JourneyType.POST_CREATION) {
        return new Promise((resolve) => {
            chrome.storage.local.get(["postCreationJourney"], (result) => {
                resolve(result.postCreationJourney ?? null);
            });
        });
    }
    else {
        return "";
    }
}