import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

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
			<Link to={`/questions/${question['id']}`}>
				<Button> View Poll</Button>
			</Link>
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
