function digitalClock() {
  let period;
  const now = new Date();
  let hours = now.getHours();
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

  if (hours > 12) {
    period = "PM";
    hours = hours % 12;
    if (hours === 0) hours = 12;
  } else {
    period = "AM";
    if (hours === 0) hours = 12;
  }

  hours = hours.toString().padStart(2, "0");

  time.textContent = `${hours} : ${minutes} : ${seconds} ${period}`;

  info.textContent = `${date} ${months[month]} ${year}, ${days[day]}`;
}
setInterval(digitalClock, 1000);

digitalClock();
