import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import Loading from './Loading';

function QuestionPoll({ users, questions, loading }) {
	const { question_id } = useParams();
	const OPTION_ONE = 'optionOne';
	const OPTION_TWO = 'optionTwo';
	const [ radioValue, setRadioValue ] = useState(OPTION_ONE);

	if (loading) {
		return <Loading />;
	}

	if (!(question_id in questions)) {
		return <p>Question does not exist</p>;
	}

	const question = questions[question_id];
	const author = users[question['author']];

	return (
		<div className="card" style={{ padding: '20px' }}>
			<div>
				<div className="avatar">
					<img src={author.avatarURL} alt="avatar" width="256" height="256" />
				</div>
				<div style={{ padding: '20px' }}>
					<p className="nes-balloon from-left nes-pointer" style={{ fontSize: '125%' }}>
						@{author['name']}: Would you rather...
					</p>
				</div>
			</div>

			<div>
				<div style={{ fontSize: '150%' }}>
					<label>
						<input
							type="radio"
							className="nes-radio"
							name="answer"
							checked={radioValue === OPTION_ONE}
							onChange={() => setRadioValue(OPTION_ONE)}
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
							onChange={() => setRadioValue(OPTION_TWO)}
						/>
						<span>{question[OPTION_TWO]['text']}</span>
					</label>
				</div>
			</div>
			<div className="container">
				<button className="nes-btn is-success">Submit</button>
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
