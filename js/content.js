// Listen for messages from the popup
chrome.runtime.onMessage.addListener(function (msg, sender, response) {
    // First, validate the message's structure
    if ((msg.from === 'popup') && (msg.subject === 'FetchJSON')) {
        // Collect the necessary data 
        var domInfo = {
            total: document.querySelectorAll('*').length,
            inputs: document.querySelectorAll('input').length,
            buttons: document.querySelectorAll('button').length
        };

        // Directly respond to the sender (popup), 
        // through the specified callback */
        response(domInfo);
    }
});

chrome.runtime.sendMessage({
    from: 'content',
    subject: 'showBadge'
});