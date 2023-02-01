import { clockData } from "../global/clockData";


/* export const apiLocation = async () => {
    try {
        const apiSecret = process.env.API_SECRET;
        const resolved = await fetch(`https://api.ipbase.com/v2/info?apikey=${apiSecret}`);
        const ipBaseData = await resolved.json();
        if (resolved.ok) {
            clockData.city = ipBaseData.data.location.city.name_translated;
            clockData.countryAbbreviated = ipBaseData.data.location.country.alpha2;
        } else {
            clockData.apiErrors.push(true);
        }
    }
    catch {
        clockData.apiErrors.push(true);
    }
} */


export const apiLocation = () => {
    const isSuccessful = false;
    if (isSuccessful) {
        return new Promise((resolve) => {
            clockData.city = "DortMonkey";
            clockData.countryAbbreviated = "MO";
            resolve(true);
        })
    } else {
        clockData.apiErrors.push(true);
    }
}