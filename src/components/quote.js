import { apiQuote } from "../api/quote";

export const displayQuote = async () => {
    const data = await apiQuote();
    document.querySelector(".quote__text").innerText = data.content;
    document.querySelector(".quote__author").innerText = data.author;
}