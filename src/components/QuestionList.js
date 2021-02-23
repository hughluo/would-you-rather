import React, { useState } from 'react';
import { connect } from 'react-redux';

import Question from './Question';
import ToggleQuestionList from './ToggleQuestionList';

function QuestionList({ authedUser, questions, categorisedQuesitons }) {
	const [ answeredQuestions, unAnsweredQuestions ] = categorisedQuesitons;
	const [ showAnswered, setShowAnswered ] = useState(false);

	return (
		<div className="container">
			<div className="columns">
				<div className="column is-three-fifths is-offset-one-fifth">
					<ToggleQuestionList showAnswered={showAnswered} setShowAnswered={setShowAnswered} />
					<ul>
						{Object.keys(showAnswered ? answeredQuestions : unAnsweredQuestions).map((id) => (
							<li key={id}>
								<Question question={questions[id]} />
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

function categorisedQuesitons(questions, authedUser) {
	let answeredQuestions = {};
	let unAnsweredQuestions = {};
	for (const id in questions) {
		const q = questions[id];
		if (q.optionOne.votes.includes(authedUser) || q.optionTwo.votes.includes(authedUser)) {
			answeredQuestions[id] = q;
		} else {
			unAnsweredQuestions[id] = q;
		}
	}
	return [ answeredQuestions, unAnsweredQuestions ];
}

function mapStateToProps({ authedUser, questions }) {
	return {
		authedUser,
		questions,
		categorisedQuesitons: categorisedQuesitons(questions, authedUser)
	};
}

export default connect(mapStateToProps)(QuestionList);
