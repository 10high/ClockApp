import { clockData } from "../global/clockData";

export const apiTime = async () => {
    try {
        const resolved = await fetch(`https://worldtimeapi.org/api/ip`);
        if (resolved.ok) {
            const data = await resolved.json();
            const time = new Date(data.datetime);
            clockData.hours = time.getHours();
            let minutes = time.getMinutes();
            if (minutes < 10) {
                minutes = `0${minutes}`;
            };
            clockData.minutes = minutes;
            clockData.timezoneFull = data.timezone;
            clockData.timezoneAbbreviation = data.abbreviation;
            clockData.weekNumber = data.week_number;
            clockData.dayOfYear = data.day_of_year;
            clockData.dayOfWeek = data.day_of_week;
            clockData.userip = data.client_ip;
        } else {
            console.log("time is pushing error from else");
            clockData.apiErrors.push(true);
        }
    }
    catch (error) {
        clockData.apiErrors.push(true);
        console.log("this is catch error" + error);
        console.log("time is pushing error from catch");
    }
}



/* export const apiTime = () => {
    const isSuccessful = true;
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
} */