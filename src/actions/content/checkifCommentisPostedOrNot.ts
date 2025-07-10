
export function checkIfCommentisPostedOrNot() {
    document.addEventListener("click", (e) => {
        const target = e.target as HTMLElement;

        // 🔹 Handle "Post Comment" button
        const postBtn = target.closest("button.comments-comment-box__submit-button--cr");
        if (!postBtn) return;

        const container = postBtn.closest("div.comments-comment-box--cr");
        if (!container) return;

        const editor = container.querySelector("div.ql-editor") as HTMLElement;
        if (!editor) return;

        const finalContent = editor.innerText.trim();
        if (!finalContent) return;

        // 🔹 Dispatch custom event with the posted comment
        const event = new CustomEvent("CommentPostedEvent", {
            detail: {
                finalContent,
            },
        });

        document.dispatchEvent(event);
    });
}
