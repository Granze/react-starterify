import React from 'react';
import { dependencies, devDependencies } from '../../package.json';

const PoweredBy = () => {
  const deps = Object.keys(dependencies)
    .map((dep, i) => <li key={i}>{dep}</li>);
  const devDeps = Object.keys(devDependencies)
    .map((dep, i) => <li key={i + 10}>{dep}</li>);

  return (
    <div>
      <h2>Powered by</h2>
      <a href="https://david-dm.org/granze/react-starterify">
        <img src="https://david-dm.org/granze/react-starterify/status.svg" alt="deps status" />
      </a>
      &nbsp;
      <a href="https://david-dm.org/granze/react-starterify#info=devDependencies">
        <img src="https://david-dm.org/granze/react-starterify/dev-status.svg" alt="dev deps status" />
      </a>
      <ul>
        {[...deps, ...devDeps]}
      </ul>
    </div>
  );
};

export default PoweredBy;
