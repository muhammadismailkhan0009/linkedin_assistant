import { generateToken } from "./generateTokenOnInstall";

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "OPEN_POST_TAB" && message.url) {
        chrome.tabs.create({ url: message.url, active: false }, (tab) => {
            const tabId = tab.id;

            chrome.tabs.onUpdated.addListener(function listener(updatedTabId, info) {
                if (updatedTabId === tabId && info.status === "complete") {
                    chrome.tabs.onUpdated.removeListener(listener);

                    chrome.scripting.executeScript({
                        target: { tabId },
                        files: ["src/background/content.js"]
                    });
                }
            });
        });
    }
});

chrome.runtime.onInstalled.addListener(async () => {

    chrome.storage.local.get(["installId"], async (result) => {
        if (result.installId) {
            console.log("Install ID already exists:", result.installId);
            return;
        }

        const secret = "your-very-secret-key"; // hardcoded for now
        const installId = crypto.randomUUID(); // unique per install

        const token = await generateToken(secret, installId);

        chrome.storage.local.set({ installId, token }, () => {
            console.log("Token generated and saved:", token);
        });
    });
});


// get tab url on popup-open
// FIXME: use window.href property instead of message to avoid issues.
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("tab message is here 2");
    if (message.type === "GET_TAB_URL_WHEN_FETCHING") {
        console.log("message received 2");
        chrome.tabs.query({ active: true }, (tabs) => {
            sendResponse({ url: tabs[0]?.url ?? null });
        });
        return true; // <-- Important: keeps message channel open
    }
});

// change banner indicator
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "SET_BADGE" && sender.tab?.id !== undefined) {
        const tabId = sender.tab.id;

        let badgeText = "";
        let badgeColor = "#000000";

        console.log("logic ran for badge");

        if (message.status === "loading") {
            badgeText = "...";
            badgeColor = "#FFA500"; // orange
        } else if (message.status === "ready") {
            badgeText = "✓";
            badgeColor = "#00C851"; // green
        } else if (message.status === "clear") {
            badgeText = "";
        }

        console.log("badge_text:" + badgeText);

        chrome.action.setBadgeText({ text: badgeText, tabId });
        if (badgeText) {
            chrome.action.setBadgeBackgroundColor({ color: badgeColor, tabId });
        }
    }
});


