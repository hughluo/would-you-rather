import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Navbar({ currUser }) {
	return (
		<div className="container">
			<nav className="navbar" role="navigation" aria-label="main navigation" style={{ height: '50px' }}>
				<div className="navbar-end">
					<div className="navbar-item">
						<div className="buttons">
							{currUser ? (
								<div>
									<Link to={'/login'} style={{ textDecoration: 'none' }}>
										<div className="columns">
											<img src={currUser.avatarURL} />
											<strong> {currUser.id}</strong>
										</div>
									</Link>
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
