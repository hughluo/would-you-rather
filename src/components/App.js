import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoadingBar from 'react-redux-loading';

import { handleInitialData } from '../actions/shared';

import QuestionList from './QuestionList';
import QuestionPoll from './QuestionPoll';
import Nav from './Nav';

class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData());
	}
	render() {
		return (
			<Router>
				<Fragment>
					<LoadingBar />
					<Nav />
					<div>
						<Switch>
							<Route path={'/'} exact component={QuestionList} />
							<Route path={'/questions/:question_id'} component={QuestionPoll} />
						</Switch>
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
