import { displayClock } from "./components/clock";
import { displayStats } from "./components/stats";
import { displayQuote } from "./components/quote";

import { addButtonAction } from "./components/button";


























const initialFetchApisAndDisplayContent = async () => {
    await displayClock();
    displayStats();
    await displayQuote();
}

initialFetchApisAndDisplayContent();
addButtonAction();


