chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "OPEN_POST_TAB" && message.url) {
        chrome.tabs.create({ url: message.url, active: false }, (tab) => {
            const tabId = tab.id;

            chrome.tabs.onUpdated.addListener(function listener(updatedTabId, info) {
                if (updatedTabId === tabId && info.status === "complete") {
                    chrome.tabs.onUpdated.removeListener(listener);

                    chrome.scripting.executeScript({
                        target: { tabId },
                        files: ["src/cnontent.js"]
                    });
                }
            });
        });
    }
});
