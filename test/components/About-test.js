import test from 'ava';
import 'babel-core/register';
import { assert } from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import About from '../../src/components/About';

const shallowRenderer = TestUtils.createRenderer();
shallowRenderer.render(<About />);
const about = shallowRenderer.getRenderOutput();

test('should have a div as container', t => {
  t.is(about.type, 'div');
});

test('should have an h2 tag containing the text "About"', () => {
  assert.include(about.props.children, <h2>About</h2>);
});

