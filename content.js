document.getElementById("applyBtn").addEventListener("click", async () => {
  const spacingOn = document.getElementById("spacingToggle").checked;

  const [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true
  });

  chrome.tabs.sendMessage(tab.id, {
    action: "applySpacing",
    spacingOn: spacingOn
  });
});
