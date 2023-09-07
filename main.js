const initApp = () => {
    console.log("App is initialized");
    const timer_button = document.getElementById("timer-button");
    timer_button.textContent = "Start";
}

document.addEventListener('DOMContentLoaded', initApp);