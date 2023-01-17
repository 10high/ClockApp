import { clockData } from "../global/clockData";
import { apiKeys } from "../../_apiKeys/apiKey";

export const apiLocation = async () => {
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