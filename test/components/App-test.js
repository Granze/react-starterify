import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import App from '../../src/components/App';
import * as packageJSON from '../../package.json';

describe('App', () => {
  const shallowRenderer = TestUtils.createRenderer();
  shallowRenderer.render(<App />);
  const app = shallowRenderer.getRenderOutput();

  it('should have a div as container', () => {
    expect(app.type).to.equal('div');
  });

  it('should have a version number that match the package.json version property', () => {
    let version = packageJSON.version;
    let h1 = app.props.children[0].props.children;

    expect(h1).to.contain(<h1>React Starterify {version}</h1>);
  });

  it('should return something', () => {
    let returnSomething = App.prototype.returnSomething('hello!');

    expect(returnSomething).to.be.equal('hello!');
  });

});
