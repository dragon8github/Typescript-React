import React from 'react'
import { Router, Route } from 'react-router'
import { Provider } from 'react-redux'

import App from './App'
import Edit from './Edit'
import store from './store'
import history from './store/history'

export default () => (
    <Provider store={store}>
        <Router history={history}>
                <Route exact path='/' component={App}/>
                <Route path='/edit' component={Edit}/>
        </Router>
    </Provider>
)