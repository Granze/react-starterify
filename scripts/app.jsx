/** @jsx React.DOM */

'use strict';

var React = require('react');
window.React = React;

var MyComponent = require('./components/mycomponent.jsx');

React.renderComponent(<MyComponent />, document.getElementById('content'));
