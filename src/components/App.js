import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoadingBar from 'react-redux-loading';
import 'bootstrap/dist/css/bootstrap.min.css';

import QuestionList from './QuestionList';

import { handleInitialData } from '../actions/shared';

class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData());
	}
	render() {
		return (
			<Router>
				<Fragment>
					<LoadingBar />
					<div>
						<Route path={'/'} exact component={QuestionList} />
					</div>
				</Fragment>
			</Router>
		);
	}
}

function mapStateToProps({ authedUser }) {
	return {
		loading: authedUser === null
	};
}

export default connect(mapStateToProps)(App);
