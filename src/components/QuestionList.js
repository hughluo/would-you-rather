import React, { useState } from 'react';
import { connect } from 'react-redux';

import Question from './Question';
import ToggleQuestionList from './ToggleQuestionList';

export const UNANSWERED = 'UNANSWERED';
export const ANSWERED = 'ANSWERED';

function QuestionList({ authedUser, questions, categorisedQuesitons }) {
	const [ answeredQuestions, unAnsweredQuestions ] = categorisedQuesitons;
	const [ toggleValue, setToggleValue ] = useState(UNANSWERED);

	return (
		<div>
			<ToggleQuestionList toggleValue={toggleValue} setToggleValue={setToggleValue} />
			<h2>QuestionList</h2>
			<ul>
				{Object.keys(toggleValue === UNANSWERED ? unAnsweredQuestions : answeredQuestions).map((id) => (
					<li key={id}>
						<Question question={questions[id]} />
					</li>
				))}
			</ul>
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
