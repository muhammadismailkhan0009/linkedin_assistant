export class DataExchangeService {


    async sendPostToBackend(scrappedPost: string, url: string) {
        try {
            const response = await fetch("http://localhost:8111/linkedin/create-comment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    scrappedPost,
                    url
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