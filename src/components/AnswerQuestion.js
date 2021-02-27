import { useState } from 'react';
import { handleAddQuestionAnswer } from '../actions/questions';

import Loading from './Loading';
import QuestionBalloon from './QuestionBalloon';

function AnswerQuestion({ author, question, loading, dispatch }) {
	const OPTION_ONE = 'optionOne';
	const OPTION_TWO = 'optionTwo';
	const [ radioValue, setRadioValue ] = useState(OPTION_ONE);

	const handleSubmit = (e) => {
		dispatch(handleAddQuestionAnswer(question.id, radioValue));
	};

	if (loading) {
		return <Loading />;
	}

	return (
		<div className="card" style={{ padding: '20px' }}>
			<QuestionBalloon author={author} />
			<div>
				<div style={{ fontSize: '150%' }}>
					<label>
						<input
							type="radio"
							className="nes-radio"
							name="answer"
							checked={radioValue === OPTION_ONE}
							onChange={() => setRadioValue(() => OPTION_ONE)}
						/>
						<span>{question[OPTION_ONE]['text']}</span>
					</label>

					<br />
					<label>
						<input
							type="radio"
							className="nes-radio"
							name="answer"
							checked={radioValue === OPTION_TWO}
							onChange={() => setRadioValue(() => OPTION_TWO)}
						/>
						<span>{question[OPTION_TWO]['text']}</span>
					</label>
				</div>
			</div>
			<div className="container">
				<button className="nes-btn is-success" onClick={handleSubmit}>
					Submit
				</button>
			</div>
		</div>
	);
}

export default AnswerQuestion;
