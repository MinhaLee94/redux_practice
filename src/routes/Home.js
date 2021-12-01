import React, { useState } from "react";
import { connect } from "react-redux";

function Home({ toDos }) {
	const [text, setText] = useState("");

	const onChange = (event) => {
		const { target: { value }} = event;
		setText(value);
	}

	const onSubmit = (event) => {
		event.preventDefault();
		setText("");
	}

	return (
		<>
			<h1>To Do</h1>
			<form onSubmit={onSubmit}>
				<input type="text" onChange={onChange} />
				<button>Add</button>
			</form>
			<ul></ul>
		</>
	);
}

function mapStateToProps(state) {
	return { toDos: state };
}

export default connect(mapStateToProps)(Home);