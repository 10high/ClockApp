import { displayClock } from "./components/clock";
import { displayStats } from "./components/stats";
import { displayQuote } from "./components/quote";
import { clockData } from "./global/clockData";

import { addButtonAction } from "./components/button";



const initialFetchApisAndDisplayContent = async () => {
    await displayClock();
    displayStats();
    await displayQuote();
}

const manageBackgroundImage = () => {
    const hours = clockData.hours;
    const backgroundElement = document.querySelector("main");
    if (hours <= 5 || hours >= 18) {
        backgroundElement.classList.remove("backgroundImage--day");
        backgroundElement.classList.add("backgroundImage--night");
    } else {
        backgroundElement.classList.remove("backgroundImage--night");
        backgroundElement.classList.add("backgroundImage--day");
    }
}


initialFetchApisAndDisplayContent();
manageBackgroundImage();
addButtonAction();


