/* import { apiTime } from "./api/time";
 */


const apiTimeData = {};

const apiTime = async () => {
    try {
        const resolved = await fetch(`https://worldtimeapi.org/api/ip`);
        const data = await resolved.json();
        const time = new Date(data.datetime);
        apiTimeData.hours = time.getHours();
        apiTimeData.minutes = time.getMinutes();
        apiTimeData.timezoneFull = data.timezone;
        apiTimeData.timezoneAbbreviation = data.abbreviation;
        apiTimeData.weekNumber = data.week_number;
        apiTimeData.dayOfYear = data.day_of_year;
        apiTimeData.dayOfWeek = data.day_of_week;
    }
    catch (error) {
        console.log("this is the APITime fetch error: ", error);
    }
}



const prepareWelcomeMessage = () => {
    const hours = apiTimeData.hours;
    let welcomeMessage = "";
    if (hours >= 5 && hours < 12) {
        welcomeMessage = "Good morning";
    }
    if (hours >= 12 && hours < 18) {
        welcomeMessage = "Good afternoon";
    }
    if (hours >= 18 || hours < 5) {
        welcomeMessage = "Good evening";
    }
    return welcomeMessage;
}



const displayClock = async () => {
    await apiTime();
    document.querySelector(".clock__welcomeMessage").innerText = prepareWelcomeMessage();
    document.querySelector(".clock__time").innerText = `${apiTimeData.hours}:${apiTimeData.minutes}`;
    document.querySelector(".clock__timezone").innerText = apiTimeData.timezoneAbbreviation;
}

displayClock();

