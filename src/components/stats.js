import { clockData } from "../global/clockData";

const displayStats = () => {
    document.querySelector("#statsTimezone").innerText = clockData.timezoneFull;
    document.querySelector("#statsDayOfYear").innerText = clockData.dayOfYear;
    document.querySelector("#statsDayOfWeek").innerText = clockData.dayOfWeek;
    document.querySelector("#statsWeekNumber").innerText = clockData.weekNumber;
}

export { displayStats }