// In the manifest, this script is set to only be injected into pages that match our site

// This will send a message to the background script
chrome.runtime.sendMessage({ recentlyClosed: 'true' }, function(sessions) {
  // When the background script responds with the sessions,
  // we will list out the recently closed tab names
  updateTabWidget(sessions);
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  // Send back the sessions object containing all recently closed sessions to whomever sent the message
  if (request.newClosed === 'true') {
    updateTabWidget(request.sessions);
  }

  return true;
});

/**
 * takes in an array of sessions and updates the tab widget on the page with them
 * @param {[Session]} sessions chrome session objects
 */
function updateTabWidget(sessions) {
  // remove "requires extension" message
  document.getElementById('recentTabs').innerHTML = '';

  // loop over every session
  for (let i = 0; i < sessions.length; i++) {
    const { tab, window } = sessions[i];
    if (tab) {
      updateWidgetWithTab(tab);
    } else {
      // if the session was a window, loop over every tab in the window
      for (let j = 0; j < window.tabs.length; j++) {
        const windowTab = window.tabs[j];
        updateWidgetWithTab(windowTab);
      }
    }
  }
}

/**
 * uses a single tab object to create a single button for the widget
 * @param {Tab} tab chrome tab object
 */
function updateWidgetWithTab(tab) {
  document.getElementById(
    'recentTabs'
  ).innerHTML += `<a class="recentTab" title="${tab.url}" href="${
    tab.url
  }" target="_blank">
    ${tab.title}
    </a>`;
}
