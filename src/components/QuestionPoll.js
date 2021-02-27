import QuestionBalloon from './QuestionBalloon';

function QuestionPoll({ author, question, authedUser }) {
	const optionOneVotesNum = question.optionOne.votes.length;
	const optionTwoVotesNum = question.optionTwo.votes.length;
	const optionOnePercentage = optionOneVotesNum / (optionOneVotesNum + optionTwoVotesNum) * 100;
	const optionTwoPercentage = optionTwoVotesNum / (optionOneVotesNum + optionTwoVotesNum) * 100;
	const authedUserVoteForOptionOne = question.optionOne.votes.includes(authedUser);

	return (
		<div>
			<div className="nes-container with-title">
				<p className="title">Question Poll</p>
				<QuestionBalloon author={author} />
				<br />
				<div className="nes-container with-title">
					<p className="title">Result</p>
					<div>
						<span className={authedUserVoteForOptionOne ? 'nes-text is-success' : ''}>
							{optionOnePercentage.toFixed(2)}% folks choose to {question.optionOne.text}
							{authedUserVoteForOptionOne ? ' (You voted for this)' : ''}
						</span>
						<progress className="nes-progress is-primary" value={optionOnePercentage} max="100" />
					</div>
					<div>
						<span className={authedUserVoteForOptionOne ? '' : 'nes-text is-success'}>
							{optionTwoPercentage.toFixed(2)}% folks choose to {question.optionTwo.text}
							{authedUserVoteForOptionOne ? '' : ' (You voted for this)'}
						</span>
						<progress className="nes-progress is-primary" value={optionTwoPercentage} max="100" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default QuestionPoll;
