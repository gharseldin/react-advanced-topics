import React from 'react'
import ReactDOM from 'react-dom'
// import App from './components/App-routing-manual.jsx'
import App from './components/App-routing-library.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'

// We will use this library to handle routing for us instead
// of having to implement it manually
// This will require the installation of react-router library
import {Route, IndexRoute, Router, hashHistory} from 'react-router'

// ReactDOM.render(<App />, document.getElementById('app'))

ReactDOM.render(
    (
        <Router>
            <Route path='/' component={App}>
                {/*This will direct us to home by default*/}
                <IndexRoute component={Home} /> 
                <Route path='/home' component={Home} />
                <Route path='/about' component={About} />
            </Route>
        </Router>
    ), document.getElementById('app')
)
