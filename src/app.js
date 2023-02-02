import { apiTime } from "./api/time";
import { apiLocation } from "./api/location";
import { apiQuote } from "./api/quote";
import { displayClock } from "./components/clock";
import { displayStats } from "./components/stats";
import { displayQuote } from "./components/quote";
import { getRefreshElements } from "./components/quote";
import { addRefreshAction } from "./components/quote";
import { clockData } from "./global/clockData";
import { manageBackgroundImage } from "./global/backgroundImage";
import { displayError } from "./global/error";
import { addButtonAction } from "./components/button";
import { statsColors } from "./components/stats";
import { timedClockRefresh } from "./components/clock";


const initialFetchApisAndDisplayContent = async () => {
    await apiTime();
    await apiLocation();
    await apiQuote();
    if (clockData.apiErrors.length > 0) {
        displayError();
    } else {
        displayQuote();
        displayClock();
        displayStats();
        manageBackgroundImage();
        statsColors();
        timedClockRefresh();
    }
}


getRefreshElements();
initialFetchApisAndDisplayContent();
addButtonAction();
addRefreshAction();

