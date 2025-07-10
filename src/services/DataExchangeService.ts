import { UserJourneyStep } from "tracing/types/UserJourneyStep";
import { AuthInfo } from "./types/AuthInfo";
import { UserIdea } from "./types/UserIdea";
import { UserJourney } from "tracing/types/UserJourney";

const baseUrl: string = "https://api.wanderlytics.me";
export class DataExchangeService {
    async getAuthToken(): Promise<string | null> {
        return new Promise((resolve) => {
            chrome.storage.local.get(["token"], (result) => {
                resolve(result.token ?? null);
            });
        });
    }

    async getInstallId(): Promise<string | null> {
        return new Promise((resolve) => {
            chrome.storage.local.get(["installId"], (result) => {
                resolve(result.installId ?? null);
            });
        });
    }

    async generatePost(userInput: string) {

        try {

            const idea: UserIdea = {
                idea: userInput
            }
            let authInfo = await this.getAuthTokenAndInstallerId();

            const response = await fetch(baseUrl + "/linkedin/api/v1/create-post", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${authInfo.token}`
                },
                body: JSON.stringify({
                    payload: idea,
                    additionalMetadata: {
                        installId: authInfo.installId
                    }
                })
            });

            if (!response.ok) {
                throw new Error(`Backend error: ${response.status}`);
            }

            const data = await response.json();
            console.log("✅ post received from backend:", data);
            return data;
        } catch (error) {
            console.error("❌ Failed to send post to backend:", error);
            return null;
        }


    }



    private async getAuthTokenAndInstallerId(): Promise<AuthInfo> {

        const token = await this.getAuthToken();
        const installId = await this.getInstallId();

        if (!token || !installId) {
            throw new Error("Missing auth token or install ID");
        }

        return {
            token,
            installId
        };

    }



    async sendPostToBackend(scrappedPost: string, url: string) {
        try {

            let authInfo = await this.getAuthTokenAndInstallerId();

            const response = await fetch(baseUrl + "/linkedin/api/v1/create-comment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${authInfo.token}`
                },
                body: JSON.stringify({
                    payload: {
                        scrappedPost,
                        url
                    },
                    additionalMetadata: {
                        installId: authInfo.installId
                    }
                })
            });

            if (!response.ok) {
                throw new Error(`Backend error: ${response.status}`);
            }

            const data = await response.json();
            console.log("✅ Comment received from backend:", data);
            return data;
        } catch (error) {
            console.error("❌ Failed to send post to backend:", error);
            return null;
        }
    }


    async sendJourneyInfo(journeyInfo: UserJourney) {
        try {

            let authInfo = await this.getAuthTokenAndInstallerId();

            const response = await fetch(baseUrl + "/linkedin/api/v1/journey", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${authInfo.token}`
                },
                body: JSON.stringify({
                    payload: journeyInfo
                    ,
                    additionalMetadata: {
                        installId: authInfo.installId
                    }
                })
            });

            if (!response.ok) {
                throw new Error(`Backend error: ${response.status}`);
            }

            const data = await response.json();
            console.log("✅ journey info sent to backend:", data);
            return data;
        } catch (error) {
            console.error("❌ Failed to send journey info to backend:", error);
            return null;
        }
    }

    async sendJourneyStepInfo(journeyStep: UserJourneyStep) {
        try {

            let authInfo = await this.getAuthTokenAndInstallerId();

            const response = await fetch(baseUrl + "/linkedin/api/v1/journey/step", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${authInfo.token}`
                },
                body: JSON.stringify({
                    payload: journeyStep,

                    additionalMetadata: {
                        installId: authInfo.installId
                    }
                })
            });

            if (!response.ok) {
                throw new Error(`Backend error: ${response.status}`);
            }

            const data = await response.json();
            console.log("✅ step info sent to backend:", data);
            return data;
        } catch (error) {
            console.error("❌ Failed to send step info to backend:", error);
            return null;
        }
    }


}
