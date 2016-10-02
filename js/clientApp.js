var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle')
var div = React.DOM.div

var myTitlefactory = React.createFactory(MyTitle)
var ce = React.createElement

var MyFirstComponent = (
  div(null,
    myTitlefactory({title: 'Props are grate', color: 'DARKTURQUOISE'}),
    React.createElement(MyTitle, {title: 'use props everywhere', color: 'mediumaquamarine'}),
    ce(MyTitle, {title: 'Props are the best', color: 'rebeccapurple'})

  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
