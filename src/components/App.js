import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoadingBar from 'react-redux-loading';

import { handleInitialData } from '../actions/shared';

import QuestionList from './QuestionList';
import QuestionPoll from './QuestionPoll';
import Navbar from './Navbar';
import Tab from './Tab';

class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData());
	}
	render() {
		return (
			<Router>
				<Fragment>
					<div className="container">
						<LoadingBar />
						<Navbar />
						<Tab />
						<div>
							<Switch>
								<Route path={'/'} exact component={QuestionList} />
								<Route path={'/questions/:question_id'} component={QuestionPoll} />
							</Switch>
						</div>
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
