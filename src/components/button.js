


const buttonElementsManager = {
    buttonElementIds: ["buttonMore", "imposter", "quote", "statsContainer", "stats", "buttonLess"],
    buttonElements: {},
    getElements() {
        for (let elementId of this.buttonElementIds) {
            this.buttonElements[elementId] = document.getElementById(elementId);
        }
    }
}

const buttonMoreAction = () => {
    buttonElementsManager.buttonElements.imposter.classList.add("imposter--shrink");
    buttonElementsManager.buttonElements.imposter.classList.remove("imposter--expanded");
    buttonElementsManager.buttonElements.quote.classList.add("quote--hidden");
    buttonElementsManager.buttonElements.quote.classList.remove("quote--visible");

    buttonElementsManager.buttonElements.statsContainer.classList.add("stats__container--expand");
    buttonElementsManager.buttonElements.statsContainer.classList.remove("stats__container--shrink");
    buttonElementsManager.buttonElements.stats.classList.add("stats--visible");
    buttonElementsManager.buttonElements.stats.classList.remove("stats--hidden");

    buttonElementsManager.buttonElements.buttonLess.hidden = false;
    buttonElementsManager.buttonElements.buttonMore.hidden = true;
}

const buttonLessAction = () => {
    buttonElementsManager.buttonElements.imposter.classList.remove("imposter--shrink");
    buttonElementsManager.buttonElements.imposter.classList.add("imposter--expanded");
    buttonElementsManager.buttonElements.quote.classList.remove("quote--hidden");
    buttonElementsManager.buttonElements.quote.classList.add("quote--visible");

    buttonElementsManager.buttonElements.statsContainer.classList.remove("stats__container--expand");
    buttonElementsManager.buttonElements.statsContainer.classList.add("stats__container--shrink");
    buttonElementsManager.buttonElements.stats.classList.remove("stats--visible");
    buttonElementsManager.buttonElements.stats.classList.add("stats--hidden");

    buttonElementsManager.buttonElements.buttonMore.hidden = false;
    buttonElementsManager.buttonElements.buttonLess.hidden = true;
}


export const addButtonAction = () => {
    buttonElementsManager.getElements();
    buttonElementsManager.buttonElements.buttonMore.addEventListener("pointerdown", buttonMoreAction);
    buttonElementsManager.buttonElements.buttonLess.addEventListener("pointerdown", buttonLessAction);

}