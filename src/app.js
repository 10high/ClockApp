import { displayClock } from "./components/clock";
import { displayStats } from "./components/stats";
import { displayQuote } from "./components/quote";
import { getRefreshElements } from "./components/quote";
import { addRefreshAction } from "./components/quote";
import { clockData } from "./global/clockData";

import { addButtonAction } from "./components/button";
import { statsColors } from "./components/stats";


const initialFetchApisAndDisplayContent = async () => {
    await displayClock();
    displayStats();
    await displayQuote();
}

const manageBackgroundImage = () => {
    const hours = clockData.hours;
    const backgroundElement = document.querySelector("body");
    if (hours <= 5 || hours >= 18) {
        backgroundElement.classList.remove("backgroundImage--day");
        backgroundElement.classList.add("backgroundImage--night");
    } else {
        backgroundElement.classList.remove("backgroundImage--night");
        backgroundElement.classList.add("backgroundImage--day");
    }
}


getRefreshElements();
initialFetchApisAndDisplayContent();
manageBackgroundImage();
addButtonAction();
addRefreshAction();
statsColors();


