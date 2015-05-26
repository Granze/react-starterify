import React from 'react';
import MyComponent from './components/mycomponent.jsx';

window.React = React;

React.render(<MyComponent />, document.getElementById('content'));
