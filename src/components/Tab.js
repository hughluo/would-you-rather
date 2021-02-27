import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
	return (
		<div className="tabs is-centered">
			<ul>
				<li>
					<Link to="/" style={{ textDecoration: 'none' }}>
						<span className="icon is-small">
							<i className="fas fa-image" aria-hidden="true" />
						</span>
						<span>Would you rather...</span>
					</Link>
				</li>
				<li>
					<Link to="/add" style={{ textDecoration: 'none' }}>
						<span className="icon is-small">
							<i className="fas fa-image" aria-hidden="true" />
						</span>
						<span>New Question</span>
					</Link>
				</li>
				<li>
					<Link to="/leaderboard" style={{ textDecoration: 'none' }}>
						<span className="icon is-small">
							<i className="fas fa-image" aria-hidden="true" />
						</span>
						<span>Leader Board </span>
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default Nav;
