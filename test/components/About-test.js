import test from 'ava';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import About from '../../src/components/About';

const shallowRenderer = TestUtils.createRenderer();
shallowRenderer.render(<About />);
const about = shallowRenderer.getRenderOutput();

test('should have a div as container', t => {
  t.is(about.type, 'div');
});

test('should contains an H2', t => {
  t.is(about.props.children[0].type, 'h2');
});

test('should have an h2 tag containing the text "About"', t => {
  t.is(about.props.children[0].props.children, 'About');
});
