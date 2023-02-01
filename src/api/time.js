import { clockData } from "../global/clockData";

/* export const apiTime = async () => {
    try {
        const resolved = await fetch(`https://worldtimeapi.org/api/ip`);
        if (resolved.ok) {
            const data = await resolved.json();
            const time = new Date(data.datetime);
            clockData.hours = time.getHours();
            const minutes = time.getMinutes();
            if (minutes < 10) {
                minutes = `0${minutes}`;
            };
            clockData.minutes = minutes;
            clockData.timezoneFull = data.timezone;
            clockData.timezoneAbbreviation = data.abbreviation;
            clockData.weekNumber = data.week_number;
            clockData.dayOfYear = data.day_of_year;
            clockData.dayOfWeek = data.day_of_week;
        } else {
            clockData.apiErrors.push(true);
        }
    }
    catch (error) {
        clockData.apiErrors.push(true);
    }
} */



export const apiTime = () => {
    const isSuccessful = false;
    if (isSuccessful) {
        return new Promise((resolve) => {
            clockData.hours = 11;
            let minutes = 45;
            if (minutes < 10) {
                minutes = `0${minutes}`;
            };
            clockData.minutes = minutes;
            clockData.timezoneFull = "Berlin/Monkeyland";
            clockData.timezoneAbbreviation = "MY";
            clockData.weekNumber = 66;
            clockData.dayOfYear = 667;
            clockData.dayOfWeek = 8;
            resolve(true);
        })
    } else {
        clockData.apiErrors.push(true);
    }
}