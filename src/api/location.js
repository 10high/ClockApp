import { clockData } from "../global/clockData";


export const apiLocation = async () => {
    const resolved = await fetch("/.netlify/functions/apisecret");
    const ipBaseData = await resolved.json();
    clockData.city = ipBaseData.data.location.city.name_translated;
    clockData.countryAbbreviated = ipBaseData.data.location.country.alpha2;
}