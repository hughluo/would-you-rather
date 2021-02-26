function LeaderboardCard({ user, createdQuestionAmount, answeredQuestionAmount }) {
	return (
		<div>
			<div>
				<span>{user.name}</span>
			</div>
			<div>
				<span>Created questions: {createdQuestionAmount}</span>
			</div>
			<div>
				<span>Answered questions: {answeredQuestionAmount}</span>
			</div>
		</div>
	);
}

export default LeaderboardCard;
