function digitalClock() {
  let period;
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const date = now.getDate();
  const month = now.getMonth();
  const year = now.getFullYear();
  const day = now.getDay();

  const time = document.querySelector(".time");
  const info = document.querySelector(".dateInfo");

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  if (hours >= 0 && hours < 12) {
    period = "AM";
    
  } else {
    period = "PM";
  }

  time.textContent = `${hours} : ${minutes} : ${seconds} ${period}`;

  info.textContent = `${date} ${months[month]} ${year}, ${days[day]}`;
}
setInterval(digitalClock, 1000);

digitalClock();
