import { createStore } from "redux";

const plusBtn = document.getElementById("add");
const minusBtn = document.getElementById("minus");
const number = document.querySelector("span");


const countModifier = (count = 0, action) => {
	if(action.type === "ADD") {
		return count += 1;
	} else if(action.type === "MINUS") {
		return count -= 1;
	} else {
		return count;
	}
}

const countStore = createStore(countModifier);

const onChange = () => {
	number.innerText = countStore.getState();
}

countStore.subscribe(onChange);

plusBtn.addEventListener("click", () => countStore.dispatch({ type: "ADD" }));
minusBtn.addEventListener("click", () => countStore.dispatch({ type: "MINUS" }));
