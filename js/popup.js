// Update the relevant fields with the new data
function setJSONData(json) {
    document.getElementById('txtJSON').textContent = JSON.stringify(json);
}

// Once the DOM is ready...
window.addEventListener('DOMContentLoaded', function () {
    // ...query for the active tab...
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        // ...and send a request for the DOM info...
        chrome.tabs.sendMessage(
            tabs[0].id,
            { from: 'popup', subject: 'FetchJSON' },
            // ...also specifying a callback to be called 
            //    from the receiving end (content script)
            setJSONData);
    });

    document.getElementById("btnCopy").onclick = function () {
        var copyText = document.getElementById("txtJSON");
        copyText.select();
        document.execCommand("Copy");
    };
});