import { createStore } from "redux";

const plusBtn = document.getElementById("add");
const minusBtn = document.getElementById("minus");
const number = document.querySelector("span");


const countModifier = (count = 0) => {
	return count;
}

const countStore = createStore(countModifier);

let count = 0;
number.innerText = count;

const updateNumber = () => {
	number.innerText = count;
}

const handleAdd = () => {
	count++;
	updateNumber();
}

const handleMinus = () => {
	count--;
	updateNumber();
}

plusBtn.addEventListener("click", handleAdd);
minusBtn.addEventListener("click", handleMinus);
