function toggleExpand(expanded) {
  const recentTabs = document.getElementById('recentTabs');
  const button = document.getElementById('expandButton');
  if (!expanded) {
    recentTabs.classList.add('expanded');
    button.onclick = () => toggleExpand(true);
    button.classList.add('expanded');
  } else {
    recentTabs.classList.remove('expanded');
    button.onclick = () => toggleExpand(false);
    button.classList.remove('expanded');
  }
}
