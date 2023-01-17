import { displayClock } from "./components/clock";
import { displayStats } from "./components/stats";
import { displayQuote } from "./components/quote";


























const initialFetchApisAndDisplayContent = async () => {
    await displayClock();
    displayStats();
    await displayQuote();
}

initialFetchApisAndDisplayContent();



