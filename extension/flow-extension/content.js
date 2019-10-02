// In the manifest, this script is set to only be injected into pages that match our site

// This will send a message to the background script
chrome.runtime.sendMessage({ recentlyClosed: 'true' }, function(tabs) {
  // When the background script responds with the sessions,
  // we will list out the recently closed tab names
  updateTabWidget(tabs);
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.newClosed === 'true') {
    updateTabWidget(request.tabs);
  }

  return true;
});

/**
 * takes in an array of sessions and updates the tab widget on the page with them
 * @param {[Tab]} tabs chrome tab objects with additional information
 */
function updateTabWidget(tabs) {
  // remove "requires extension" message
  if (document.getElementById('recentTabs')) {
    document.getElementById('recentTabs').innerHTML = '';
  }

  // loop over every session
  for (let i = 0; i < Object.keys(tabs).length; i++) {
    const tab = tabs[Object.keys(tabs)[i]];
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
