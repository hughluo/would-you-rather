import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { setAuthedUser } from '../actions/authedUser';

function Navbar({ currUser, dispatch }) {
	const handleLogout = () => {
		dispatch(setAuthedUser('guest'));
	};
	return (
		<div className="container">
			<nav className="navbar" role="navigation" aria-label="main navigation" style={{ height: '50px' }}>
				<div className="navbar-end">
					<div className="navbar-item">
						<div className="buttons">
							{currUser ? (
								<div className="columns">
									<button
										disabled
										style={{
											border: 'none',
											textDecoration: 'none'
										}}
									>
										<img src={currUser.avatarURL} />
										<strong> {currUser.id}</strong>
									</button>
									<button className="nes-btn is-warning" onClick={handleLogout}>
										<strong>Logout</strong>
									</button>
								</div>
							) : (
								<div>
									<Link to={'/login'}>
										<button className="nes-btn is-primary">
											<strong>Login</strong>
										</button>
									</Link>
								</div>
							)}
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}

function mapStateToProps({ authedUser, users }) {
	return {
		currUser: users[authedUser]
	};
}

export default connect(mapStateToProps)(Navbar);
