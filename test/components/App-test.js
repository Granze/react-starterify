import test from 'ava';
import { isEqual } from 'lodash';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import App from '../../src/components/App';
import { version } from '../../package.json';

const shallowRenderer = TestUtils.createRenderer();
shallowRenderer.render(<App />);
const app = shallowRenderer.getRenderOutput();

test('should have a div as container', t => {
  t.is(app.type, 'div');
});

test('should contains an H1', t => {
  t.is(app.props.children[0].props.children[0].type, 'h1');
});

test('should display the title and the version number', t => {
  const h1 = <h1>React Starterify {version}</h1>;
  const target = app.props.children[0].props.children[0];
  t.truthy(isEqual(target.props.children, h1.props.children));
});
