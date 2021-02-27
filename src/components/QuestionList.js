import { useState } from 'react';
import { connect } from 'react-redux';

import Question from './Question';
import ToggleQuestionList from './ToggleQuestionList';

function QuestionList({ categorisedQuesitons }) {
	const [ answeredQuestions, unAnsweredQuestions ] = categorisedQuesitons;
	const [ showAnswered, setShowAnswered ] = useState(false);

	return (
		<div className="container">
			<div className="columns">
				<div className="column is-three-fifths is-offset-one-fifth">
					<ToggleQuestionList showAnswered={showAnswered} setShowAnswered={setShowAnswered} />
					<ul>
						{(showAnswered ? answeredQuestions : unAnsweredQuestions).map((q) => (
							<li key={q.id}>
								<Question question={q} />
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

function categorisedQuesitons(questions, authedUser) {
	let answeredQuestions = [];
	let unAnsweredQuestions = [];
	for (const id in questions) {
		const q = questions[id];
		if (q.optionOne.votes.includes(authedUser) || q.optionTwo.votes.includes(authedUser)) {
			answeredQuestions.push(q);
		} else {
			unAnsweredQuestions.push(q);
		}
	}
	answeredQuestions.sort((a, b) => b.timestamp - a.timestamp);
	unAnsweredQuestions.sort((a, b) => b.timestamp - a.timestamp);
	return [ answeredQuestions, unAnsweredQuestions ];
}

function mapStateToProps({ authedUser, questions }) {
	return {
		categorisedQuesitons: categorisedQuesitons(questions, authedUser)
	};
}

export default connect(mapStateToProps)(QuestionList);
