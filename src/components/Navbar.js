function Navbar() {
	return (
		<div>
			<nav className="navbar" role="navigation" aria-label="main navigation">
				<div className="navbar-end">
					<div className="navbar-item">
						<div className="buttons">
							<a className="button nes-btn is-primary">
								<strong>Sign up</strong>
							</a>
							<a className="button nes-btn is-light">Log in</a>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
