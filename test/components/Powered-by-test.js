import test from 'ava';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Poweredby from '../../src/components/Powered-by';
import { dependencies, devDependencies } from '../../package.json';

const shallowRenderer = TestUtils.createRenderer();
shallowRenderer.render(<Poweredby />);
const poweredBy = shallowRenderer.getRenderOutput();

test('should have a div as container', t => {
  t.is(poweredBy.type, 'div');
});

test('should render the deps list and "react" should be present', t => {
  const ul = poweredBy.props.children.filter(c => c.type === 'ul');
  const li = ul[0].props.children[1].props.children;

  t.is(li, 'react');
});

test('should display all the dependencies and dev dependencies', t => {
  const ul = poweredBy.props.children.filter(c => c.type === 'ul');
  const renderedDeps = ul[0].props.children.length;
  const npmDeps = Object.keys(dependencies).length + Object.keys(devDependencies).length;

  t.is(renderedDeps, npmDeps);
});
