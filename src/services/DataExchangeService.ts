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

    async sendPostToBackend(scrappedPost: string, url: string) {
        try {
            const token = await this.getAuthToken();
            const installId = await this.getInstallId();

            if (!token || !installId) {
                throw new Error("Missing auth token or install ID");
            }

            const response = await fetch("https://api.wanderlytics.me/linkedin/api/v1/create-comment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    payload: {
                        scrappedPost,
                        url
                    },
                    additionalMetadata: {
                        installId
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
}
