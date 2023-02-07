import { clockData } from "../global/clockData";


export const apiQuote = async () => {
    try {
        const resolved = await fetch(`https://api.quotable.io/random?tags=technology`);
        const data = await resolved.json();
        if (resolved.ok) {
            clockData.quoteAuthor = data.author;
            clockData.quoteContent = data.content;
        } else {
            console.log("quote is pushing error from else");
            clockData.apiErrors.push(true);
        }
    }
    catch (error) {
        console.log("quote is pushing error from catch");
        clockData.apiErrors.push(true);
    }
}


/* export const apiQuote = () => {
    const isSuccessful = true;
    if (isSuccessful) {
        return new Promise((resolve) => {
            clockData.quoteAuthor = "Ada Lovelace";
            clockData.quoteContent = "The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.";
            resolve(true);
        })
    } else {
        clockData.apiErrors.push(true);
    }
} */