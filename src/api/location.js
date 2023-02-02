import { clockData } from "../global/clockData";


export const apiLocation = async () => {
    try {
        const resolved = await fetch("/.netlify/functions/apisecret");
        const ipBaseData = await resolved.json();
        clockData.city = ipBaseData.data.location.city.name_translated;
        clockData.countryAbbreviated = ipBaseData.data.location.country.alpha2;
    }
    catch {
        console.log("location pushed error from catch");
        clockData.apiErrors.push(true);
    }
}


/* export const apiLocation = () => {
    const isSuccessful = true;
    if (isSuccessful) {
        return new Promise((resolve) => {
            clockData.city = "DortMonkey";
            clockData.countryAbbreviated = "MO";
            resolve(true);
        })
    } else {
        clockData.apiErrors.push(true);
    }
} */