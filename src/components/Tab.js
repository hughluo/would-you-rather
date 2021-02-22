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
				<li>
					<a>
						<span className="icon is-small">
							<i className="fas fa-music" aria-hidden="true" />
						</span>
						<span>Music</span>
					</a>
				</li>
				<li>
					<a>
						<span className="icon is-small">
							<i className="fas fa-film" aria-hidden="true" />
						</span>
						<span>Videos</span>
					</a>
				</li>
				<li>
					<a>
						<span className="icon is-small">
							<i className="far fa-file-alt" aria-hidden="true" />
						</span>
						<span>Documents</span>
					</a>
				</li>
			</ul>
		</div>
	);
}

export default Nav;
