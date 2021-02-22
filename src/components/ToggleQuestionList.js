function ToggleQuestionList({ toggleValue, setToggleValue }) {
	const UNANSWERED = 'UNANSWERED';
	const ANSWERED = 'ANSWERED';

	return (
		<div class="tabs is-toggle is-fullwidth">
			<ul>
				<li class={toggleValue === ANSWERED ? 'is-active' : ''}>
					<a onClick={() => setToggleValue(ANSWERED)}>
						<span class="icon is-small">
							<i class="fas fa-image" aria-hidden="true" />
						</span>
						<span>Answered</span>
					</a>
				</li>
				<li class={toggleValue === UNANSWERED ? 'is-active' : ''}>
					<a onClick={() => setToggleValue(UNANSWERED)}>
						<span class="icon is-small">
							<i class="fas fa-music" aria-hidden="true" />
						</span>
						<span>Unanswered</span>
					</a>
				</li>
			</ul>
		</div>
	);
}

export default ToggleQuestionList;
