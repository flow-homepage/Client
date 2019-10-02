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
              hostSuffix: 'flowhome.us'
            }
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {
              hostSuffix: 'localhost'
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
  if (request.recentlyClosed === 'true') {
    chrome.sessions.getRecentlyClosed(sessions => {
      const tabs = getTabsFromSessions(sessions);
      sendResponse(tabs);
    });
  }

  return true;
});

chrome.tabs.onRemoved.addListener(() => {
  chrome.tabs.query(
    { url: ['*://*.flowhome.us/*', '*://localhost/*'] },
    function(tabs) {
      chrome.sessions.getRecentlyClosed(sessions => {
        for (let i = 0; i < tabs.length; i++) {
          const flowTabs = getTabsFromSessions(sessions);
          chrome.tabs.sendMessage(tabs[i].id, {
            newClosed: 'true',
            tabs: flowTabs
          });
        }
      });
    }
  );
});

function getTabsFromSessions(sessions) {
  let tabs = {};
  chrome.storage.sync.get(['flowTabs'], function(result) {
    if (result) {
      tabs = result;
    }
  });

  // loop over every session
  for (let i = 0; i < sessions.length; i++) {
    const { tab, window } = sessions[i];
    if (tab) {
      tabs[tab.url] = tab;
    } else {
      // if the session was a window, loop over every tab in the window
      for (let j = 0; j < window.tabs.length; j++) {
        const windowTab = window.tabs[j];
        tabs[windowTab.url] = windowTab;
      }
    }
  }

  chrome.storage.sync.set({ flowTabs: tabs });

  return tabs;
}
