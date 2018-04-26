chrome.runtime.onMessage.addListener(function (msg, sender) {
  if ((msg.from === 'content') && (msg.subject === 'showBadge')) {
    chrome.browserAction.setBadgeText({ "text": 'OK' });

    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function (tabs) {
      chrome.browserAction.setPopup({ tabId: tabs[0].id, popup: 'src/popup/popup.html' });
    });

  }
});

chrome.browserAction.onClicked.addListener(function (tab) {
  alert('Taxportal not deteected.');
});