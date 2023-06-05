let seconds = 0;
let intervalId = 0;
let status_connection = false;

const timer = document.querySelector(".timer");
const connect_button = document.querySelector(".connect-button");

connect_button.addEventListener("click", (e) => {
    seconds = 0;
    timer.innerHTML = "00:00:00";

    clearInterval(intervalId);

    if (!status_connection) {
        connect_button.classList.remove("loader-status");
        setTimeout(() => {
            connect_button.classList.add("status_connected");
            connect_button.classList.add("loader-status");
            intervalId = setInterval(displayTime, 1000);
        }, 20000);
        status_connection = true;
    } else 
    {
        connect_button.classList.add("loader-status");
        connect_button.classList.remove("status_connected");
        status_connection = false;
    }
    


});

function displayTime() {
    seconds++
    const hours = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    timer.innerHTML = `${hours}:${minutes}:${secs}`;
}
