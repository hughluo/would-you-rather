import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoadingBar from 'react-redux-loading';

import { handleInitialData } from '../actions/shared';

import Login from './Login';
import QuestionList from './QuestionList';
import AnswerQuestion from './AnswerQuestion';
import Navbar from './Navbar';
import Tab from './Tab';
import QuestionDetail from './QuestionDetail';

class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData());
	}
	render() {
		return (
			<Router>
				<Fragment>
					<div className="container">
						<LoadingBar
							className="nes-progress is-primary"
							style={{ backgroundColor: 'red', height: '2px', zIndex: 999, position: 'absolute' }}
						/>
						<Navbar />
						<Tab />
						<div>
							<Switch>
								<Route path={'/login'} exact component={Login} />
								<Route path={'/'} exact component={QuestionList} />
								<Route path={'/questions/:question_id'} component={QuestionDetail} />
							</Switch>
						</div>
					</div>
				</Fragment>
			</Router>
		);
	}
}

function mapStateToProps({ authedUser, users }) {
	return {
		loading: authedUser === null
	};
}

export default connect(mapStateToProps)(App);
