import { apiQuote } from "../api/quote";


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
    const data = await apiQuote();
    quoteElementsManager.quoteElements.quoteText.innerText = data.content;
    quoteElementsManager.quoteElements.quoteAuthor.innerText = data.author;
}

const getRefreshElements = () => quoteElementsManager.getElements();

const addRefreshAction = () => {
    quoteElementsManager.quoteElements.quoteRefresh.addEventListener("pointerdown", displayQuote);
}

export { getRefreshElements, displayQuote, addRefreshAction }