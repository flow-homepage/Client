/**
 * This file is the background script for the Chrome extension.
 * Basically, Chrome extensions run their own hidden pages
 * and they have background scripts driving them.
 */

// Add a listener on the installed event for this extension
chrome.runtime.onInstalled.addListener(() => {
  // When installed, save off some data in persistent storage
  chrome.storage.sync.set({ color: 'white' }, () => {
    console.log('The color is green.');
  });

  // When installed, add remove all rules for this extension and then add our new ones
  chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
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
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // Send back the sessions object containing all recently closed sessions to whomever sent the message
  if (request.recentlyClosed) {
    chrome.sessions.getRecentlyClosed(sessions => {
      getTabsFromSessions(sessions, tabs => {
        sendResponse(tabs);
      });
    });
  }

  return true;
});

chrome.tabs.onRemoved.addListener(() => {
  chrome.tabs.query(
    { url: ['*://*.flowhome.us/*', '*://localhost/*'] },
    tabs => {
      for (let i = 0; i < tabs.length; i++) {
        chrome.tabs.sendMessage(tabs[i].id, {
          newClosed: 'true'
        });
      }
    }
  );
});

function getTabsFromSessions(sessions, callback) {
  let tabs = {};
  chrome.storage.local.get(['flowTabs'], async tabResult => {
    if (tabResult.flowTabs) {
      tabs = tabResult.flowTabs;
    }

    // loop over every session
    for (let i = 0; i < sessions.length; i++) {
      let { tab, window } = sessions[i];
      tab = Object.assign({}, tab);
      window = Object.assign({}, window);
      if (tab) {
        if (!tabs[tab.url]) {
          const newTab = {};
          newTab.url = tab.url;
          newTab.title = tab.title;
          newTab.time = sessions[i].lastModified;
          newTab.category = await determineCategory(tab.url);
          tabs[tab.url] = newTab;
        }
      } else {
        // if the session was a window, loop over every tab in the window
        for (let j = 0; j < window.tabs.length; j++) {
          const windowTab = window.tabs[j];
          if (!tabs[windowTab.url]) {
            const newTab = {};
            newTab.url = windowTab.url;
            newTab.title = windowTab.title;
            newTab.time = sessions[i].lastModified;
            newTab.category = await determineCategory(windowTab.url);
            tabs[windowTab.url] = newTab;
          }
        }
      }
    }

    chrome.storage.local.set({ flowTabs: tabs });

    const sortedTabs = [];
    Object.keys(tabs).forEach((key, index) => {
      sortedTabs.push(tabs[key]);
    });

    sortedTabs.sort((a, b) => b.time - a.time);

    callback(sortedTabs);
  });
}

function webshrinkerRequest(accessKey, secretKey, url = '') {
  const request = `categories/v3/${window.btoa(url)}?key=${accessKey}`;
  const hash = md5(`${secretKey}:${request}`);

  return `https://api.webshrinker.com/${request}&hash=${hash}`;
}

function determineCategory(url) {
  const username = 'WTzvxyS8o4sz8zDHh1bW';
  const password = 'slFk572nKOik0r3xTQJ3';
  const apiUrl = webshrinkerRequest(username, password, url);

  return fetch(apiUrl, {
    method: 'GET'
  })
    .then(response => response.json())
    .then(json => {
      if (json.data) {
        console.log(json.data[0].url);
        console.log(json.data[0].categories);
        const categoryCode = parseInt(
          json.data[0].categories[0].parent.substr(3)
        );

        switch (categoryCode) {
          case 9:
          case 22:
          case 25:
            return 'Fun';
          case 1:
          case 2:
          case 8:
          case 16:
          case 17:
          case 20:
            return 'Interest';
          case 4:
          case 6:
          case 7:
          case 10:
          case 14:
          case 18:
          case 23:
            return 'Life';
          case 3:
          case 5:
          case 11:
          case 12:
          case 13:
          case 15:
          case 19:
          case 21:
            return 'Information';
          default:
            return 'Uncategorized';
        }
      }
      return 'Uncategorized';
    });
}
