import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import './index.css';

ReactDOM.render(
    <AppContainer>
        <Router history={browserHistory} >
            <Route path="/" component={App} />
        </Router>
    </AppContainer>,
    document.getElementById('root')
);

if (module.hot) module.hot.accept();