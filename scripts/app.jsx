'use strict';

var React = require('react');
window.React = React;

var MyComponent = require('./components/mycomponent.jsx');

React.render(<MyComponent />, document.getElementById('content'));
