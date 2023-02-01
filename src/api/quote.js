import { clockData } from "../global/clockData";


export const apiQuote = async () => {
    try {
        const resolved = await fetch(`https://api.quotable.io/random?tags=technology`);
        const data = await resolved.json();
        if (resolved.ok) {
            clockData.quoteAuthor = data.author;
            clockData.quoteContent = data.content;
        } else {
            clockData.apiErrors.push(true);
        }
    }
    catch (error) {
        clockData.apiErrors.push(true);
    }
}