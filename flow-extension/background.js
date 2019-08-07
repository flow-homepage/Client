chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({ color: 'white' }, function() {
    console.log('The color is green.');
  });

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {
              urlMatches:
                'file:///C:/Users/CBrand/Desktop/Code/flow-homepage-client*'
            }
          })
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }
    ]);
  });
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  chrome.sessions.getRecentlyClosed(sessions => {
    sendResponse(sessions);
  });
  return true;
});
