import { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { setAuthedUser } from '../actions/authedUser';

function Login({ users, dispatch }) {
	const handleClick = (user_id) => {
		dispatch(setAuthedUser(user_id));
		setToHome(() => true);
	};

	const [ toHome, setToHome ] = useState(false);

	if (toHome === true) {
		return <Redirect to="/" />;
	}

	return (
		<div className="container">
			<div className="columns">
				<div className="column is-half is-offset-one-quarter">
					<span style={{ fontSize: '200%' }}>Please login...</span>
				</div>
				<br />
			</div>
			{Object.keys(users).map((user_id) => (
				<div className="columns" key={user_id}>
					<div className="column is-half is-offset-one-quarter">
						<div className="nes-container is-rounded" onClick={() => handleClick(user_id)}>
							<div className="columns">
								<img src={users[user_id].avatarURL} alt="avatar" width="64" height="64" />
								<div>
									<span style={{ fontSize: '150%' }}>{users[user_id].name}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

function mapStateToProps({ authedUser, users }) {
	return {
		authedUser,
		users
	};
}

export default connect(mapStateToProps)(Login);
