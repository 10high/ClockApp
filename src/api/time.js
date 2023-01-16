
const apiTime = async () => {
    try {
        const resolved = await fetch(`https://worldtimeapi.org/api/ip`);
        const data = await resolved.json();
        return data;
    }
    catch (error) {
        console.log("this is the APITime fetch error: ", error);
    }
}



export { apiTime }


/* Pertinent data:
datetime //e.g. 2022-12-22T12:21:46.880358+01:00
abbreviation //e.g. CET
timezone // e.g. Europe/Berlin
day_of_year // e.g. 365
day_of_week // e.g. 4
week_number // 52
*/