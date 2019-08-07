chrome.runtime.sendMessage({ greeting: 'hello' }, function(sessions) {
  for (let i = 0; i < sessions.length; i++) {
    const page = sessions[i].tab || sessions[i].window;
    document.getElementById('recentTabs').innerHTML += page.title + '<br />';
  }
});
