import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Loading from './Loading';

function Question({ question, author, loading }) {
	if (loading) {
		return (
			<div>
				<Loading />
			</div>
		);
	}
	if (question === null || author === null) {
		return <p>This question doesn't exist</p>;
	}
	return (
		<div>
			<h2> {author['name']} asked: Would you rather...</h2>
			<div>
				<input type="radio" name="option" value="optionOne" />
				<label>{question['optionOne']['text']}</label>
			</div>

			<div>
				<input type="radio" name="option" value="optionTwo" />
				<label>{question['optionTwo']['text']}</label>
			</div>
			<Link to={`/questions/${question['id']}`}>
				<button> View Poll</button>
			</Link>
		</div>
	);
}

function mapStateToProps({ users, authedUser }, { question }) {
	return {
		author: users[question['author']],
		authedUser,
		question,
		loading: authedUser === null
	};
}

export default connect(mapStateToProps)(Question);
