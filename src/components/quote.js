import { apiQuote } from "../api/quote";

export const displayQuote = async () => {
    const data = await apiQuote();
    document.querySelector("#quoteText").innerText = data.content;
    document.querySelector("#quoteAuthor").innerText = data.author;
}

