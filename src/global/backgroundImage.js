import { clockData } from "./clockData";


export const manageBackgroundImage = () => {
    const hours = clockData.hours;
    const backgroundElement = document.querySelector("body");
    if (hours <= 5 || hours >= 18) {
        backgroundElement.classList.remove("backgroundImage--day");
        backgroundElement.classList.add("backgroundImage--night");
    } else {
        backgroundElement.classList.remove("backgroundImage--night");
        backgroundElement.classList.add("backgroundImage--day");
    }
}