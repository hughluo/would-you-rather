import { connect } from 'react-redux';

function AddQuestion({ authedUser }) {
	return <div>AddQuestion</div>;
}

function mapStateToProps({ authedUser }) {
	return { authedUser };
}

export default connect(mapStateToProps)(AddQuestion);
