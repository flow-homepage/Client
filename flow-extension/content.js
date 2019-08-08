// In the manifest, this script is set to only be injected into pages that match our site

// This will send a message to the background script
chrome.runtime.sendMessage({ greeting: 'hello' }, function(sessions) {
  // When the background script responds with the sessions,
  // we will list out the recently closed tab/window names
  for (let i = 0; i < sessions.length; i++) {
    const page = sessions[i].tab || sessions[i].window;
    document.getElementById('recentTabs').innerHTML = '';
    document.getElementById('recentTabs').innerHTML += page.title + '<br />';
  }
});
