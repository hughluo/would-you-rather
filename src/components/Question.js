import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Loading from './Loading';

function Question({ question, author, loading }) {
	if (loading) {
		return (
			<div>
				<Loading />
			</div>
		);
	}
	if (question === null || author === null) {
		return <p>This question doesn't exist</p>;
	}
	return (
		<div className="box">
			<div className="card">
				<div className="card-content">
					<div className="media">
						<div className="media-left">
							<figure className="image is-48x48">
								<img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
							</figure>
						</div>
						<div className="media-content">
							<p className="title is-4">John Smith</p>
							<p className="subtitle is-6">@johnsmith</p>
						</div>
						<div className="content">
							<span> {author['name']} asked: Would you rather...</span>
							<Link to={`/questions/${question['id']}`}>
								<button> View Poll</button>
							</Link>
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
		question,
		loading: authedUser === null
	};
}

export default connect(mapStateToProps)(Question);
