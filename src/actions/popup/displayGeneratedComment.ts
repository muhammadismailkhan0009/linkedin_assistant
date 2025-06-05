export function displayGeneratedComment(comment: string) {
    const commentBox = document.getElementById("comment-box") as HTMLTextAreaElement;
    const copyButton = document.getElementById("copy-btn") as HTMLButtonElement;

    if (commentBox && copyButton) {
        commentBox.value = comment;
        copyButton.disabled = false;

        copyButton.onclick = async () => {
            try {
                await navigator.clipboard.writeText(commentBox.value);
                copyButton.innerText = "Copied!";
                commentBox.value = "";
                await chrome.storage.local.set({ generatedComment: "" });
                setTimeout(() => (copyButton.innerText = "Copy Comment"), 1500);
            } catch (err) {
                console.error("❌ Failed to copy:", err);
            }
        };
    }
}