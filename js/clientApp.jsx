const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const ReactRouter = require('react-router')
const Search = require('./Search')

const { Router, Route, hashHitory } = ReactRouter

const App = () => (
  <Router history={hashHitory}>
    <Route path='/' component={Landing} />
    <Route path='/search' component={Search} />
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))
