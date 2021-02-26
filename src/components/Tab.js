import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
	return (
		<div className="tabs is-centered">
			<ul>
				<li className="is-active">
					<Link to="/" style={{ textDecoration: 'none' }}>
						<span className="icon is-small">
							<i className="fas fa-image" aria-hidden="true" />
						</span>
						<span>Questions</span>
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default Nav;
