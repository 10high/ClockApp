/* import { apiTime } from "./api/time";
 */

/* import { apiKeys } from "../_apiKeys/apiKey"; */

const clockData = {};

const apiTime = async () => {
    try {
        const resolved = await fetch(`https://worldtimeapi.org/api/ip`);
        const data = await resolved.json();
        const time = new Date(data.datetime);
        clockData.hours = time.getHours();
        clockData.minutes = time.getMinutes();
        clockData.timezoneFull = data.timezone;
        clockData.timezoneAbbreviation = data.abbreviation;
        clockData.weekNumber = data.week_number;
        clockData.dayOfYear = data.day_of_year;
        clockData.dayOfWeek = data.day_of_week;
    }
    catch (error) {
        console.log("this is the APITime fetch error: ", error);
    }
}

const apiLocation = async () => {
    const apiKey = apiKeys.ipBase;
    try {
        const resolved = await fetch(`https://api.ipbase.com/v2/info?apikey=${apiKey}`, { headers: { "Accept": "Application/json" } });
        const ipBaseData = await resolved.json();
        clockData.city = ipBaseData.data.location.city.name_translated;
        clockData.countryAbbreviated = ipBaseData.data.location.country.alpha2;
    }
    catch (error) {
        console.log("this is the APILocation fetch error: ", error);
    }
}



const prepareWelcomeMessage = () => {
    const hours = clockData.hours;
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
    document.querySelector(".clock__time").innerText = `${clockData.hours}:${clockData.minutes}`;
    document.querySelector(".clock__timezone").innerText = clockData.timezoneAbbreviation;
    /* await apiLocation();
    document.querySelector(".clock__city").innerText = clockData.city;
    document.querySelector(".clock__country").innerText = clockData.countryAbbreviated; */
}

displayClock();

const apiQuote = async () => {
    try {
        const resolved = await fetch(`https://api.quotable.io/random?tags=technology`);
        const data = await resolved.json();
        return data;
    }
    catch (error) {
        console.log("this is the APIQuote fetch error: ", error);
    }
}


const displayQuote = async () => {
    const data = await apiQuote();
    document.querySelector(".quote__text").innerText = data.content;
    document.querySelector(".quote__author").innerText = data.author;
}

displayQuote();






