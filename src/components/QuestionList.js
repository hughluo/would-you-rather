import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuestionList extends Component {
	render() {
		const { questions } = this.props;
		return (
			<div>
				<h2>QuestionList</h2>
				<ul>{Object.keys(questions).map((id) => <li key={id}>{JSON.stringify(questions[id])}</li>)}</ul>
			</div>
		);
	}
}

function mapStateToProps({ questions }) {
	return {
		questions
	};
}

export default connect(mapStateToProps)(QuestionList);
