import React from 'react'
import pack from '../../package.json'

Mycomponent = React.createClass({
  render: function() {
    let version = pack.version,
        deps;

    deps = Object.keys(pack.devDependencies).map((dep, i) => <li key={i}>{dep}</li>);

    return (
      <div>
        <h1 className="Mycomponent">Welcome to &#9883; React Starterify {version}</h1>
        <p>Powered by:</p>
        <ul>
          {deps}
        </ul>
      </div>
    )
  }
});

export default Mycomponent;
