const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const ReactRouter = require('react-router')

const { Router, Route, hashHitory } = ReactRouter

const App = () => (
  <Router history={hashHitory}>
    <Route path='/' component={Landing} />
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))
