import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Home from './containers/Home';
import App from './containers/App';

export default (
    <Router history = {hashHistory}>
        <Route path = "/" component={App}>
            <IndexRoute component={Home}/>
        </Route>
    </Router>
);