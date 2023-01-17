
export const apiQuote = async () => {
    try {
        const resolved = await fetch(`https://api.quotable.io/random?tags=technology`);
        const data = await resolved.json();
        return data;
    }
    catch (error) {
        console.log("this is the APIQuote fetch error: ", error);
    }
}