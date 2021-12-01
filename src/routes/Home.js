import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreator } from "../store";

function Home({ toDos, addToDo }) {
	const [text, setText] = useState("");

	const onChange = (event) => {
		const { target: { value }} = event;
		setText(value);
	}

	const onSubmit = (event) => {
		event.preventDefault();
		addToDo(text);
		setText("");
	}

	return (
		<>
			<h1>To Do</h1>
			<form onSubmit={onSubmit}>
				<input type="text" value={text} onChange={onChange} />
				<button>Add</button>
			</form>
			<ul>{JSON.stringify(toDos)}</ul>
		</>
	);
}

function mapStateToProps(state) {
	return { toDos: state };
}

function mapDispatchToProps(dispatch) {
	return {
		// creating function using addToDo from store.js
		addToDo: (text) => dispatch(actionCreator.addToDo(text))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);