chrome.runtime.onMessage.addListener(function (msg, sender) {
  if ((msg.from === 'content') && (msg.subject === 'showBadge')) {
    chrome.browserAction.setBadgeText({ "text": 'OK' });
  }
});