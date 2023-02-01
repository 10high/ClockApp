import { apiQuote } from "../api/quote";
import { clockData } from "../global/clockData";
import { displayError } from "../global/error";


const quoteElementsManager = {
    quoteElementIds: ["quoteText", "quoteAuthor", "quoteRefresh"],
    quoteElements: {},
    getElements() {
        for (let elementId of this.quoteElementIds) {
            this.quoteElements[elementId] = document.getElementById(elementId);
        }
    }
}

const displayQuote = async () => {
    quoteElementsManager.quoteElements.quoteText.innerText = clockData.quoteContent;
    quoteElementsManager.quoteElements.quoteAuthor.innerText = clockData.quoteAuthor;
}

const getRefreshElements = () => quoteElementsManager.getElements();

const updateQuote = async () => {
    await apiQuote();
    if (clockData.apiErrors.length > 0) {
        displayError();
    } else {
        displayQuote();
    }
}

const addRefreshAction = () => {
    quoteElementsManager.quoteElements.quoteRefresh.addEventListener("pointerdown", updateQuote);
}

export { getRefreshElements, displayQuote, addRefreshAction }