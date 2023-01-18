import { displayClock } from "./components/clock";
import { displayStats } from "./components/stats";
import { displayQuote } from "./components/quote";


























const initialFetchApisAndDisplayContent = async () => {
    await displayClock();
    displayStats();
    await displayQuote();
}

initialFetchApisAndDisplayContent();


document.querySelector("#buttonMore").addEventListener("click", function () {
    document.querySelector("#quoteContainer").classList.add("quote__container--shrink");
    document.querySelector("#quoteContainer").classList.remove("quote__container--expand");
    document.querySelector("#quote").classList.add("quote--hidden");
    document.querySelector("#quote").classList.remove("quote--visible");

    document.querySelector("#statsContainer").classList.add("stats__container--expand");
    document.querySelector("#statsContainer").classList.remove("stats__container--shrink");
    document.querySelector("#stats").classList.add("stats--visible");
    document.querySelector("#stats").classList.remove("stats--hidden");

    document.querySelector("#buttonLess").hidden = false;
    document.querySelector("#buttonMore").hidden = true;

    document.querySelector("#buttonLess").addEventListener("click", function () {
        document.querySelector("#quoteContainer").classList.remove("quote__container--shrink");
        document.querySelector("#quoteContainer").classList.add("quote__container--expand");
        document.querySelector("#quote").classList.remove("quote--hidden");
        document.querySelector("#quote").classList.add("quote--visible");

        document.querySelector("#statsContainer").classList.remove("stats__container--expand");
        document.querySelector("#statsContainer").classList.add("stats__container--shrink");
        document.querySelector("#stats").classList.remove("stats--visible");
        document.querySelector("#stats").classList.add("stats--hidden");

        document.querySelector("#buttonMore").hidden = false;
        document.querySelector("#buttonLess").hidden = true;
    })
})
