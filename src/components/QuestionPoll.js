import QuestionBalloon from './QuestionBalloon';

function QuestionPoll({ author, question, authedUser }) {
	const optionOneVotesNum = question.optionOne.votes.length;
	const optionTwoVotesNum = question.optionTwo.votes.length;
	const optionOnePercentage = optionOneVotesNum / (optionOneVotesNum + optionTwoVotesNum) * 100;
	const optionTwoPercentage = optionTwoVotesNum / (optionOneVotesNum + optionTwoVotesNum) * 100;
	const authedUserVoteForOptionOne = authedUser in question.optionOne.votes;

	return (
		<div>
			<div className="nes-container with-title">
				<p className="title">Question Poll</p>
				<QuestionBalloon author={author} />
				<br />
				<div className="nes-container with-title">
					<p className="title">Result</p>
					<div>
						<span>
							{authedUserVoteForOptionOne ? 'You and other ' : ''}
							{optionOnePercentage.toFixed(2)}% Folks choose to {question.optionOne.text}
						</span>
						<progress className="nes-progress is-primary" value={optionOnePercentage} max="100" />
					</div>
					<div>
						<span>
							{authedUserVoteForOptionOne ? '' : 'You and other '}
							{optionTwoPercentage.toFixed(2)}% Folks choose to {question.optionTwo.text}
						</span>
						<progress className="nes-progress is-primary" value={optionTwoPercentage} max="100" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default QuestionPoll;
