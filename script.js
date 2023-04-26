setInterval(() => {
  let clock = document.getElementById('clock');
  let daydisplay = document.getElementById('day');
  let month = document.getElementById('month');
  let year = document.getElementById('year');

  // Getting Time
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (minutes <= 9) {
    minutes = `0${minutes}`;
  }
  let seconds = date.getSeconds();
  if (seconds <= 9) {
    seconds = `0${seconds}`;
  }

  // Month & Year
  let cMonth = date.getMonth() + 1;
  let cYear = date.getFullYear();
  // Days
  let day = date.getDay();

  let daysName = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  // Display AM or PM
  if (hours < 12) {
    document.getElementById('amOrpm').innerHTML = 'AM';
  } else {
    document.getElementById('amOrpm').innerHTML = 'PM';
  }

  // Display Clock
  clock.innerHTML = `${hours}:${minutes}:${seconds} `;

  // Display Day
  daydisplay.innerHTML = daysName[day];

  // Display Month
  month.innerHTML = cMonth;

  // Display Year
  year.innerHTML = cYear;
}, 1000);
