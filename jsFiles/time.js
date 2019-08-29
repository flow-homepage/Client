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

setInterval(updateTime, 1000);
updateTime();
