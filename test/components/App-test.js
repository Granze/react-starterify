import test from 'ava';
import 'babel-core/register';
import { assert } from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import App from '../../src/components/App';
import * as packageJSON from '../../package.json';

const shallowRenderer = TestUtils.createRenderer();
shallowRenderer.render(<App />);
const app = shallowRenderer.getRenderOutput();

test('should have a div as container', t => {
  t.is(app.type, 'div');
});

test('should have a version number that match the package.json version property', () => {
  let version = packageJSON.version;
  let h1 = app.props.children[0].props.children;

  assert.include(h1, <h1>React Starterify {version}</h1>);
});

test('should return something', t => {
  let returnSomething = App.prototype.returnSomething('hello!');

  t.is(returnSomething, 'hello!');
});
