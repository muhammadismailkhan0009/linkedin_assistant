export async function getCurrentTabUrlOnFetching(): Promise<string | null> {
    return new Promise((resolve) => {
        chrome.runtime.sendMessage({ type: "GET_TAB_URL_WHEN_FETCHING" }, (response) => {
            resolve(response?.url ?? null);
        });
    });
}
