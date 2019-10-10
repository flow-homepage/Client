// In the manifest, this script is set to only be injected into pages that match our site

getTabsFromBackground();

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.newClosed === 'true') {
    getTabsFromBackground();
  }

  return true;
});

/**
 * takes in an array of tabs and updates the tab widget on the page with them
 * @param {[Tab]} tabs chrome tab objects with additional information
 */
function updateTabWidget(tabs) {
  // remove "requires extension" message
  if (document.getElementById('recentTabs')) {
    document.getElementById('recentTabs').innerHTML = '';
  }

  // loop over every tab
  for (let i = 0; i < tabs.length; i++) {
    const tab = tabs[i];
    if (tab) {
      updateWidgetWithTab(tab);
    }
  }
}

/**
 * uses a single tab object to create a single button for the widget
 * @param {Tab} tab chrome tab object with additional information
 */
function updateWidgetWithTab(tab) {
  if (document.getElementById('recentTabs')) {
    document.getElementById(
      'recentTabs'
    ).innerHTML += `<a class="recentTab" title="${tab.url}" href="${tab.url}" target="_blank">
    ${tab.title}
    </a>`;
  }
}

function getTabsFromBackground() {
  // This will send a message to the background script
  chrome.runtime.sendMessage({ recentlyClosed: 'true' }, function(tabs) {
    // When the background script responds with the sessions,
    // we will list out the recently closed tab names
    const localCategory = JSON.parse(window.localStorage.getItem('category'));
    if (localCategory) {
      const chromeCategory = {
        name: localCategory
      };
      chrome.storage.local.set({ category: chromeCategory });
    }
    console.log(tabs);
    updateTabWidget(tabs);
  });
}
