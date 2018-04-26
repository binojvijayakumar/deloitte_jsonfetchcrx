// Listen for messages from the popup
chrome.runtime.onMessage.addListener(function (msg, sender, response) {
    // First, validate the message's structure
    if ((msg.from === 'popup') && (msg.subject === 'FetchJSON')) {
        // Directly respond to the sender (popup), 
        // through the specified callback */
        response(portalJSONDataCRX);
    }
});

var portalJSONDataCRX;
var eventMethodCRX = window.addEventListener ? 'addEventListener' : 'attachEvent';
var eventerCRX = window[eventMethodCRX];
var messageEventCRX = eventMethodCRX == 'attachEvent' ? 'onmessage' : 'message';
eventerCRX(messageEventCRX, function (e) {
    if (e.data == 'SaveAppForm' && e.data == 'SaveAsPdf') {
        return;
    } else {
        portalJSONDataCRX = e.data;

        chrome.runtime.sendMessage({
            from: 'content',
            subject: 'showAction'
        });
    }
});