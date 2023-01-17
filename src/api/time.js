import { clockData } from "../global/clockData";

export const apiTime = async () => {
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