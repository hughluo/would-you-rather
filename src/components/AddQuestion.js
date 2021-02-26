import { connect } from 'react-redux';

import Loading from './Loading';

function AddQuestion({ loading, users }) {
	if (loading) {
		return <Loading />;
	}
	return <div>AddQuestion</div>;
}

function mapStateToProps({ authedUser, users }) {
	return {
		loading: authedUser === null
	};
}

export default connect(mapStateToProps)(AddQuestion);
