import { clockData } from "../global/clockData";

const displayStats = () => {
    document.querySelector("#statsTimezone").innerText = clockData.timezoneFull;
    document.querySelector("#statsDayOfYear").innerText = clockData.dayOfYear;
    document.querySelector("#statsDayOfWeek").innerText = clockData.dayOfWeek;
    document.querySelector("#statsWeekNumber").innerText = clockData.weekNumber;
}

const statsColors = () => {
    const hours = clockData.hours;
    if (hours <= 5 || hours >= 18) {
        document.documentElement.style.setProperty("--statsBackgroundColor", `hsla(0, 0%, 0%, 0.75)`);
        document.documentElement.style.setProperty("--statsFontColor", `#FFFFFF`);
    } else {
        document.documentElement.style.setProperty("--statsBackgroundColor", `hsla(0, 0%, 100%, 0.75)`);
        document.documentElement.style.setProperty("--statsFontColor", `#303030`);
    }
}

export { displayStats, statsColors }