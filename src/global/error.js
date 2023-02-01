
export const displayError = () => {
    document.querySelector("#error").hidden = false;
    document.querySelector("#imposter").classList.add("imposter--error");
    document.querySelector("main").classList.add("main--error");
}