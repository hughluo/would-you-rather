import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<div>
			<nav className="navbar" role="navigation" aria-label="main navigation">
				<div className="navbar-end">
					<div className="navbar-item">
						<div className="buttons">
							<Link to={'/login'}>
								<button className="nes-btn is-primary">
									<strong>Login</strong>
								</button>
							</Link>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
