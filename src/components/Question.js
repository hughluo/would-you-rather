import React from 'react';
import { connect } from 'react-redux';

function Question({ question, author }) {
	return (
		<div>
			<h2> {author['name']} asked: Would you rather...</h2>
			<div>
				<input type="radio" name="option" value="optionOne" />
				<label for="huey">{question['optionOne']['text']}</label>
			</div>

			<div>
				<input type="radio" name="option" value="optionTwo" />
				<label for="dewey">{question['optionTwo']['text']}</label>
			</div>
			<button> View Poll</button>
		</div>
	);
}

function mapStateToProps({ users, authedUser }, { question }) {
	return {
		author: users[question['author']],
		authedUser,
		question
	};
}

export default connect(mapStateToProps)(Question);
