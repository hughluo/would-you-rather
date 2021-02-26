function LeaderboardCard({ user, createdQuestionAmount, answeredQuestionAmount }) {
	return (
		<div className="columns">
			<div className="column is-half is-offset-one-quarter">
				<div className="nes-container is-rounded is-centered ">
					<div>
						<span>{user.name}</span>
					</div>
					<div>
						<img src={user.avatarURL} alt="avatar" width="128" height="128" />
					</div>
					<div>
						<span>Created questions: {createdQuestionAmount}</span>
					</div>
					<div>
						<span>Answered questions: {answeredQuestionAmount}</span>
					</div>
					<div>
						<span style={{ fontSize: '150%' }}>
							Total Score: {createdQuestionAmount + answeredQuestionAmount}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LeaderboardCard;
