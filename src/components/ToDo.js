import React from "react";
import { connect } from "react-redux";
import { actionCreator } from "../store";
import { Link } from "react-router-dom";

const ToDo = ({ text, onBtnClick, id }) => {
	return (
		<li>
			<Link to={`/${id}`}>
				{text}
				<button onClick={onBtnClick}>DEL</button>
			</Link>
		</li>
	)
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
		onBtnClick: () => dispatch(actionCreator.deleteToDo(ownProps.id))
	}
}

export default connect(null, mapDispatchToProps)(ToDo);