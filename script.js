function digitalClock() {
    let period;
    const now = new Date;
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const date = now.getDate();
    const month = now.getMonth();
    const year = now.getFullYear();


    const time = document.querySelector('.time');


    if (hours >= 0 && hours < 12) {
        period = 'AM'
    }else {

        period = 'PM'
    }
    time.innerHTML = `${hours} : ${minutes} : ${seconds} ${period}`;


}
setInterval(digitalClock, 1000);

digitalClock()