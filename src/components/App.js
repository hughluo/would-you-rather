import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoadingBar from 'react-redux-loading';

import { handleInitialData } from '../actions/shared';

import Login from './Login';
import QuestionList from './QuestionList';
import Navbar from './Navbar';
import Tab from './Tab';
import QuestionDetail from './QuestionDetail';
import Leaderboard from './Leaderboard';
import AddQuestion from './AddQuestion';

class App extends Component {
	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(handleInitialData());
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
								<Route path={'/leaderboard'} exact component={Leaderboard} />
								<Route path={'/add'} exact component={AddQuestion} />
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
	return {};
}

export default connect(mapStateToProps)(App);
