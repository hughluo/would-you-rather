import QuestionBalloon from './QuestionBalloon';

function QuestionPoll({ author, question }) {
	const optionOneVotesNum = question.optionOne.votes.length;
	const optionTwoVotesNum = question.optionTwo.votes.length;
	const optionOnePercentage = optionOneVotesNum / (optionOneVotesNum + optionTwoVotesNum) * 100;
	const optionTwoPercentage = optionTwoVotesNum / (optionOneVotesNum + optionTwoVotesNum) * 100;

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
							{optionOnePercentage}% Folks choose to {question.optionOne.text}
						</span>
						<progress className="nes-progress is-primary" value={optionOnePercentage} max="100" />
					</div>
					<div>
						<span>
							{optionTwoPercentage}% Folks choose to {question.optionTwo.text}
						</span>
						<progress className="nes-progress is-primary" value={optionTwoPercentage} max="100" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default QuestionPoll;
