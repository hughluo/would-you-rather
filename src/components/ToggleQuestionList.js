function ToggleQuestionList({ showAnswered, setShowAnswered }) {
	const handleOnClick = (e, answered) => {
		e.preventDefault();
		setShowAnswered(() => answered);
	};
	return (
		<div className="tabs is-toggle is-fullwidth">
			<ul>
				<li className={showAnswered ? '' : 'is-active'}>
					<a
						onClick={(e) => handleOnClick(e, false)}
						value={false}
						href="/"
						style={{ textDecoration: 'none' }}
					>
						<span className="icon is-small">
							<i className="fas fa-music" aria-hidden="true" />
						</span>
						<span>Unanswered</span>
					</a>
				</li>
				<li className={showAnswered ? 'is-active' : ''}>
					<a onClick={(e) => handleOnClick(e, true)} value={true} href="/" style={{ textDecoration: 'none' }}>
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
