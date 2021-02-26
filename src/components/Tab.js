import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
	return (
		<div className="tabs is-centered">
			<ul>
				<li className={'is-active'}>
					<Link to="/" style={{ textDecoration: 'none' }}>
						<span className="icon is-small">
							<i className="fas fa-image" aria-hidden="true" />
						</span>
						<span>Home</span>
					</Link>
				</li>
				<li className={'is-active'}>
					<Link to="/add" style={{ textDecoration: 'none' }}>
						<span className="icon is-small">
							<i className="fas fa-image" aria-hidden="true" />
						</span>
						<span>New Question</span>
					</Link>
				</li>
				<li className={'is-active'}>
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
