import { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { handleAddQuestion } from '../actions/questions';

function AddQuestion({ authedUser, dispatch }) {
	const [ optionOneInput, setOptionOneInput ] = useState('');
	const [ optionTwoInput, setOptionTwoInput ] = useState('');
	const [ showInvalidInputWarning, setShowInvalidInputWarning ] = useState(false);
	const [ toHome, setToHome ] = useState(false);

	if (!authedUser || authedUser === 'guest') {
		return <Redirect to="/login" />;
	}
	if (toHome) {
		return <Redirect to="/" />;
	}

	const handleSubmit = () => {
		if (optionOneInput === '' || optionTwoInput === '') {
			setShowInvalidInputWarning(() => true);
		} else {
			setShowInvalidInputWarning(() => false);
			dispatch(handleAddQuestion(optionOneInput, optionTwoInput));
			setOptionOneInput(() => '');
			setOptionTwoInput(() => '');
			setToHome(() => true);
		}
	};
	return (
		<div className="columns">
			<div className="column is-half is-offset-one-quarter">
				<div className="nes-container is-rounded is-centered">
					<p className={showInvalidInputWarning ? 'nes-text is-error' : ''}>
						{showInvalidInputWarning ? 'Make sure both options are non-empty!' : 'Create New Question'}
					</p>
					<p>Would you rather...</p>
					<div className="nes-field">
						<br />
						<input
							type="text"
							id="name_field"
							class="nes-input"
							value={optionOneInput}
							onChange={(e) => setOptionOneInput(e.target.value)}
						/>
						<br />
					</div>
					<span>OR</span>
					<div className="nes-field">
						<br />
						<input
							type="text"
							id="name_field"
							class="nes-input"
							value={optionTwoInput}
							onChange={(e) => setOptionTwoInput(e.target.value)}
						/>
						<br />
					</div>
					<div>
						<button className="nes-btn is-success" onClick={handleSubmit}>
							Submit
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

function mapStateToProps({ authedUser, dispatch }) {
	return { authedUser, dispatch };
}

export default connect(mapStateToProps)(AddQuestion);
