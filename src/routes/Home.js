import React, { useState } from "react";

function Home() {
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

export default Home;