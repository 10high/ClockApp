import { clockData } from "../global/clockData";


export const apiLocation = async () => {
    const apiSecret = process.env.API_SECRET;
    const resolved = await fetch(`https://api.ipbase.com/v2/info?apikey=${apiSecret}`);
    const ipBaseData = await resolved.json();
    clockData.city = ipBaseData.data.location.city.name_translated;
    clockData.countryAbbreviated = ipBaseData.data.location.country.alpha2;
}