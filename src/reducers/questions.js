import { RECEIVE_QUESTIONS, ANSWER_QUESTION, ADD_QUESTION } from '../actions/questions';

export default function questions(state = {}, action) {
	switch (action.type) {
		case RECEIVE_QUESTIONS:
			return {
				...state,
				...action.questions
			};
		case ANSWER_QUESTION:
			let updatedQuestion = {};
			const { question_id, user_id, option } = action.answer;
			if (state[question_id]) {
				updatedQuestion = {
					...state[question_id],
					[option]: {
						...state[question_id][option],
						votes: state[question_id][option].votes.concat(user_id)
					}
				};
			}
			return {
				...state,
				[question_id]: updatedQuestion
			};
		case ADD_QUESTION:
			const { question } = action;

			return {
				...state,
				[action.question.id]: question
			};
		default:
			return state;
	}
}
