import React from 'react/addons';
import {expect} from 'chai';
import Mycomponent from '../../scripts/components/mycomponent.jsx';
import * as packageJSON from '../../package.json';

describe('My component', () => {
  let {TestUtils} = React.addons;
  let shallowRenderer = TestUtils.createRenderer();
  shallowRenderer.render(<Mycomponent />);
  let myComponent = shallowRenderer.getRenderOutput();

  it('should have a div as container', () => {
    expect(myComponent.type).to.equal('div');
  });

  it('should contains an H1 tag with the welcome message', () => {
    expect(myComponent.props.children).to.contain(<h1 className="Mycomponent">Welcome to &#9883; React Starterify</h1>);
  });

  it('should have a version number that match the package.json version property', () => {
    let version = packageJSON.version;

    expect(myComponent.props.children).to.contain(<span>version {version}</span>);
  });

  it('should render the deps list and "react" should be present', () => {
    let ul = myComponent.props.children.filter(c => c.type === 'ul');
    let li = ul[0].props.children[0].props.children;

    expect(li).to.equal('react');
  });

  it('should display all the dependencies and dev dependencies', () => {
    let ul = myComponent.props.children.filter(c => c.type === 'ul');
    let renderedDeps = ul[0].props.children.length;
    let npmDeps = Object.keys(packageJSON.dependencies).length + Object.keys(packageJSON.devDependencies).length;

    expect(renderedDeps).to.be.equal(npmDeps);
  });

  it('should return something', () => {
    let returnSomething = Mycomponent.prototype.returnSomething('hello!');

    expect(returnSomething).to.be.equal('hello!');
  });

});
