import { connect } from 'react-redux';

import Loading from './Loading';
import LeaderboardCard from './LeaderboardCard';

function Leaderboard({ loading, userList, userToCreatedQuestionAmountDict, userToAnsweredQuestionAmountDict }) {
	if (loading) {
		return <Loading />;
	}
	return (
		<div className="container">
			{userList.map((user) => (
				<LeaderboardCard
					key={user.id}
					user={user}
					createdQuestionAmount={userToCreatedQuestionAmountDict[user.id]}
					answeredQuestionAmount={userToAnsweredQuestionAmountDict[user.id]}
				/>
			))}
		</div>
	);
}

function mapStateToProps({ authedUser, users, questions }) {
	let userToCreatedQuestionAmountDict = {};
	let userToAnsweredQuestionAmountDict = {};

	for (const q of Object.values(questions)) {
		if (q.author in userToCreatedQuestionAmountDict) {
			userToCreatedQuestionAmountDict[q.author] += 1;
		} else {
			userToCreatedQuestionAmountDict[q.author] = 1;
		}
		for (const v of [ ...q.optionOne.votes, ...q.optionTwo.votes ]) {
			if (v in userToAnsweredQuestionAmountDict) {
				userToAnsweredQuestionAmountDict[v] += 1;
			} else {
				userToAnsweredQuestionAmountDict[v] = 1;
			}
		}
	}

	let userList = Object.values(users).sort(
		(a, b) =>
			userToCreatedQuestionAmountDict[b.id] +
			userToAnsweredQuestionAmountDict[b.id] -
			userToCreatedQuestionAmountDict[a.id] -
			userToAnsweredQuestionAmountDict[a.id]
	);

	return {
		loading: authedUser === null,
		userList,
		userToCreatedQuestionAmountDict,
		userToAnsweredQuestionAmountDict
	};
}

export default connect(mapStateToProps)(Leaderboard);
