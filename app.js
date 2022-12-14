const newYear = '15 Sep 2022'
const hoursEl = document.getElementById("hours")
const minutesEl = document.getElementById("mins")
const secondsEl = document.getElementById("seconds")
const daysEl = document.getElementById("days")

function countdown() {
    const newYearsDate = new Date(newYear)
    const currentDate = new Date()

    const totalSeconds = (newYearsDate - currentDate) / 1000
    const days = Math.floor(totalSeconds / (3600 * 24))
    const minutes = Math.floor(totalSeconds / 60) % 60
    const hours = Math.floor(totalSeconds / 3600) % 24
    const seconds = Math.floor(totalSeconds) % 60


    daysEl.innerText = formatTime(days)
    hoursEl.innerText = formatTime(hours)
    minutesEl.innerText = formatTime(minutes)
    secondsEl.innerText = formatTime(seconds)
        // console.log(`Days: ${days}\nHours: ${hours}\nMinutes: ${minutes}\nSeconds: ${seconds}`);

}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time
}

countdown()

setInterval(countdown, 1000);