function Navbar() {
	return (
		<div>
			<nav className="navbar" role="navigation" aria-label="main navigation">
				<div id="navbarBasicExample" className="navbar-menu">
					<div className="navbar-start">
						<a className="navbar-item">Home</a>

						<a className="navbar-item">Documentation</a>
					</div>
				</div>

				<div className="navbar-end">
					<div className="navbar-item">
						<div className="buttons">
							<a className="button is-primary">
								<strong>Sign up</strong>
							</a>
							<a className="button is-light">Log in</a>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
