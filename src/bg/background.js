chrome.runtime.onMessage.addListener(function (msg, sender) {
  if ((msg.from === 'content') && (msg.subject === 'showAction')) {
    chrome.tabs.query({
      active: true
    }, function (tabs) {
      chrome.pageAction.show(tabs[0].id);
      chrome.pageAction.setPopup({
        tabId: tabs[0].id,
        popup: 'src/popup/popup.html'
      });
    });
  }
});