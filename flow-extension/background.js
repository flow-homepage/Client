/**
 * This file is the background script for the Chrome extension.
 * Basically, Chrome extensions run their own hidden pages
 * and they have background scripts driving them.
 */

// Add a listener on the installed event for this extension
chrome.runtime.onInstalled.addListener(function() {
  // When installed, save off some data in persistent storage
  chrome.storage.sync.set({ color: 'white' }, function() {
    console.log('The color is green.');
  });

  // When installed, add remove all rules for this extension and then add our new ones
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        // If we detect we are on our site, our extension becomes active
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

// Add a listener on the message recieved event
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  // Send back the sessions object containing all recently closed sessions to whomever sent the message
  chrome.sessions.getRecentlyClosed(sessions => {
    sendResponse(sessions);
  });
  return true;
});
