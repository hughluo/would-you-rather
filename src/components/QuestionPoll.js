import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

import Loading from './Loading';

function QuestionPoll({ users, questions, loading }) {
	const { question_id } = useParams();

	if (loading) {
		return <Loading />;
	}

	if (!(question_id in questions)) {
		return <p>Question does not exist</p>;
	}

	console.log(`useParam: ${question_id}`);
	console.log(`questions: ${JSON.stringify(questions)}`);

	const question = questions[question_id];
	console.log(`question: ${question}`);
	const author = users[question['author']];

	return (
		<div>
			<h1>QuestionPoll</h1>
			<div className="avatar">
				<Image src={author.avatarURL} />
			</div>
			<h2> {author['name']} asks: Would you rather...</h2>
			<div>
				<input type="radio" name="option" value="optionOne" />
				<label for="huey">{question['optionOne']['text']}</label>
			</div>

			<div>
				<input type="radio" name="option" value="optionTwo" />
				<label for="dewey">{question['optionTwo']['text']}</label>
			</div>
		</div>
	);
}

function mapStateToProps({ authedUser, users, questions }) {
	return {
		authedUser,
		users,
		questions,
		loading: authedUser === null
	};
}

export default connect(mapStateToProps)(QuestionPoll);
