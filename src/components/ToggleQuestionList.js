function ToggleQuestionList({ toggleValue, setToggleValue }) {
	const UNANSWERED = 'UNANSWERED';
	const ANSWERED = 'ANSWERED';

	return (
		<div className="tabs is-toggle is-fullwidth">
			<ul>
				<li className={toggleValue === ANSWERED ? 'is-active' : ''}>
					<a onClick={() => setToggleValue(ANSWERED)}>
						<span className="icon is-small">
							<i className="fas fa-image" aria-hidden="true" />
						</span>
						<span>Answered</span>
					</a>
				</li>
				<li className={toggleValue === UNANSWERED ? 'is-active' : ''}>
					<a onClick={() => setToggleValue(UNANSWERED)}>
						<span className="icon is-small">
							<i className="fas fa-music" aria-hidden="true" />
						</span>
						<span>Unanswered</span>
					</a>
				</li>
			</ul>
		</div>
	);
}

export default ToggleQuestionList;
