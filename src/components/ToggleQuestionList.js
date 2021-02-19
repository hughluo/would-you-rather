import { ToggleButton, ButtonGroup } from 'react-bootstrap';

function ToggleQuestionList({ toggleValue, setToggleValue }) {
	const UNANSWERED = 'UNANSWERED';
	const ANSWERED = 'ANSWERED';

	return (
		<ButtonGroup toggle>
			<ToggleButton
				key="0"
				type="radio"
				variant={toggleValue === UNANSWERED ? 'primary' : 'light'}
				name="radio"
				value={UNANSWERED}
				checked={toggleValue === UNANSWERED}
				onChange={(e) => setToggleValue(e.currentTarget.value)}
			>
				Unanswered Questions
			</ToggleButton>
			<ToggleButton
				key="1"
				type="radio"
				variant={toggleValue === ANSWERED ? 'primary' : 'light'}
				name="radio"
				value={ANSWERED}
				checked={toggleValue === ANSWERED}
				onChange={(e) => setToggleValue(e.currentTarget.value)}
			>
				Answered Questions
			</ToggleButton>
		</ButtonGroup>
	);
}

export default ToggleQuestionList;
