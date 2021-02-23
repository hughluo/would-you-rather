function ToggleQuestionList({ showAnswered, setShowAnswered }) {
	return (
		<div className="tabs is-toggle is-fullwidth">
			<ul>
				<li className={showAnswered ? '' : 'is-active'}>
					<a onClick={() => setShowAnswered(false)}>
						<span className="icon is-small">
							<i className="fas fa-music" aria-hidden="true" />
						</span>
						<span>Unanswered</span>
					</a>
				</li>
				<li className={showAnswered ? 'is-active' : ''}>
					<a onClick={() => setShowAnswered(true)}>
						<span className="icon is-small">
							<i className="fas fa-image" aria-hidden="true" />
						</span>
						<span>Answered</span>
					</a>
				</li>
			</ul>
		</div>
	);
}

export default ToggleQuestionList;
