import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Question({ question, author, loading }) {
	if (question === null || author === null) {
		return <p>This question doesn't exist</p>;
	}
	return (
		<div className="box">
			<div className="card">
				<div className="card-content">
					<div className="media">
						<div className="media-left">
							<figure className="image is-96x96">
								<img src={author['avatarURL']} alt="avatar" />
							</figure>
						</div>
						<div className="media-content">
							<p className="title is-4">{author['name']}</p>
							<p className="subtitle is-6" style={{ fontSize: '80%' }}>{`@${author['id']}`}</p>
						</div>
						<div className="content">
							<span>{question['optionOne']['text'].substring(0, 5)}...</span>
							<br />
							<span>or</span>
							<br />
							<span>{question['optionTwo']['text'].substring(0, 5)}</span>
							<div>
								<Link to={`/questions/${question['id']}`}>
									<button> View Poll</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function mapStateToProps({ users, authedUser }, { question }) {
	return {
		author: users[question['author']],
		authedUser,
		question
	};
}

export default connect(mapStateToProps)(Question);
