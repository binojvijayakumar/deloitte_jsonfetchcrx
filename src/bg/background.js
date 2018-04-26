chrome.runtime.onMessage.addListener(function (msg, sender) {
  if ((msg.from === 'content') && (msg.subject === 'showAction')) {

    chrome.tabs.query({
      active: true,
      status: 'complete',
      url: 'https://qa4.apps.tax/*'
    }, function (tabs) {
      if (!tabs) return;
      chrome.pageAction.show(tabs[0].id);
      chrome.pageAction.setPopup({
        tabId: tabs[0].id,
        popup: 'src/popup/popup.html'
      });
    });
  } else if ((msg.from === 'content') && (msg.subject === 'hideAction')) {
    chrome.tabs.query({
      active: true,
      status: 'complete',
      url: 'https://qa4.apps.tax/*'
    }, function (tabs) {
      if (!tabs) return;
      chrome.pageAction.hide(tabs[0].id);
    });
  }
});