chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "speak",
    title: "To Speak: %s",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if ("speak" === info.menuItemId) {
    const speakText = info.selectionText || "No text selected";
    chrome.storage.local.set({ speakText });
  }
});
