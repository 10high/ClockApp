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


const welcomeMessageIconManager = {
    buildClockWelcomeMessageIconSun() {
        const iconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        iconSvg.setAttribute("width", "24");
        iconSvg.setAttribute("height", "24");
        const iconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        iconPath.setAttribute("d", "M11.78 19.417c.594 0 1.083.449 1.146 1.026l.006.125v1.842a1.152 1.152 0 01-2.296.125l-.007-.125v-1.842c0-.636.516-1.151 1.152-1.151zM6.382 17.18a1.15 1.15 0 01.09 1.527l-.09.1-1.302 1.303a1.152 1.152 0 01-1.718-1.528l.09-.1 1.302-1.302a1.15 1.15 0 011.628 0zm12.427 0l1.303 1.303a1.15 1.15 0 11-1.628 1.627L17.18 18.81a1.15 1.15 0 111.628-1.628zM11.781 5.879a5.908 5.908 0 015.901 5.902 5.908 5.908 0 01-5.901 5.902 5.908 5.908 0 01-5.902-5.902 5.908 5.908 0 015.902-5.902zm10.63 4.75a1.151 1.151 0 110 2.303h-1.843a1.151 1.151 0 110-2.303h1.842zm-19.418 0a1.151 1.151 0 01.126 2.296l-.125.007H1.15a1.151 1.151 0 01-.125-2.296l.125-.007h1.842zm1.985-7.268l.1.09 1.303 1.302a1.151 1.151 0 01-1.528 1.718l-.1-.09L3.45 5.08A1.15 1.15 0 014.978 3.36zm15.133.09c.45.449.45 1.178 0 1.628L18.808 6.38a1.151 1.151 0 11-1.628-1.628l1.303-1.303c.449-.449 1.178-.449 1.628 0zM11.781 0c.636 0 1.151.515 1.151 1.151v1.843a1.152 1.152 0 01-2.303 0V1.15C10.63.515 11.145 0 11.781 0z");
        iconPath.setAttribute("fill", "#FFF");
        iconPath.setAttribute("fill-rule", "nonzero");

        iconSvg.classList.add("clock__welcomeMessageIcon");

        iconSvg.append(iconPath);
        return iconSvg;
    },
    buildClockWelcomeMessageIconMoon() {
        const iconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        iconSvg.setAttribute("width", "23");
        iconSvg.setAttribute("height", "24");
        const iconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        iconPath.setAttribute("d", "M22.157 17.366a.802.802 0 00-.891-.248 8.463 8.463 0 01-2.866.482c-4.853 0-8.8-3.949-8.8-8.8a8.773 8.773 0 013.856-7.274.801.801 0 00-.334-1.454A7.766 7.766 0 0012 0C5.382 0 0 5.382 0 12s5.382 12 12 12c4.2 0 8.02-2.134 10.218-5.709a.805.805 0 00-.061-.925z");
        iconPath.setAttribute("fill", "#FFF");
        iconPath.setAttribute("fill-rule", "nonzero");

        iconSvg.classList.add("clock__welcomeMessageIcon");

        iconSvg.append(iconPath);
        return iconSvg;
    },
    buildWelcomeMessageIcon() {
        const hours = clockData.hours;
        if (hours <= 5 || hours >= 18) {
            return this.buildClockWelcomeMessageIconMoon();
        } else {
            return this.buildClockWelcomeMessageIconSun();
        }
    }
}

const prepareWelcomeMessageText = () => {
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
    document.querySelector(".clock__welcomeMessageWrapper").prepend(welcomeMessageIconManager.buildWelcomeMessageIcon());
    document.querySelector(".clock__welcomeMessage").innerText = prepareWelcomeMessageText();
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






