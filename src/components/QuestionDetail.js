import { connect } from 'react-redux';

import AnswerQuestion from './AnswerQuestion';
import QuestionPoll from './QuestionPoll';

function QuestionDetail({ loading, autheUser, author, question, answered }) {
	if (loading) {
		return <p>Loading...</p>;
	}

	if (question == null) {
		return <p>Question does not exist</p>;
	}

	return (
		<div>
			{answered ? (
				<QuestionPoll question={question} author={author} />
			) : (
				<AnswerQuestion question={question} author={author} />
			)}
		</div>
	);
}

function mapStateToProps({ authedUser, users, questions }, { match }) {
	const loading = authedUser === null;
	if (loading) return { loading };

	const question_id = match.params.question_id;
	if (!(question_id in questions)) {
		return {};
	}

	const question = questions[question_id];
	return {
		authedUser,
		author: users[question['author']],
		question,
		answered: question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)
	};
}

export default connect(mapStateToProps)(QuestionDetail);
