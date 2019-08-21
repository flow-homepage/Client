// REQUIRES "//cdnjs.cloudflare.com/ajax/libs/moment.js/2.7.0/moment.min.js" to be imported first in HTML

function updateTime() {
  // instantiate a moment object
  const NowMoment = moment().format('h:mm:ss a [<br />] MMMM Do YYYY');

  // instantiate a JavaScript Date object
  // var NowDate = new Date();

  // display value of moment object in #displayMoment div
  const eDisplayMoment = document.getElementById('displayMoment');
  eDisplayMoment.innerHTML = NowMoment;

  // display value of Date object in #displayJsDate div
  // var eDisplayDate = document.getElementById('displayJsDate');
  // eDisplayDate.innerHTML = NowDate;
}

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

setInterval(updateTime, 1000);
updateTime();
