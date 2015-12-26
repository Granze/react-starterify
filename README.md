[![Build Status](https://travis-ci.org/Granze/react-starterify.svg?branch=master)](https://travis-ci.org/Granze/react-starterify)
[![bitHound Score](https://www.bithound.io/github/Granze/react-starterify/badges/score.svg)](https://www.bithound.io/github/Granze/react-starterify/master)
[![Dependency status](https://david-dm.org/granze/react-starterify/status.svg)](https://david-dm.org/granze/react-starterify "Dependency status")
[![Dev dependency status](https://david-dm.org/granze/react-starterify/dev-status.svg)](https://david-dm.org/granze/react-starterify#info=devDependencies "Dev dependency status")

# React Starterify

A minimal React JS application starter kit.

## Start small, add what you need.

React Starterify aims to give you a good starting point for your projects.
If you're looking for a minimal ES6 (ES2015) React JS starter with nice [shallow rendering](https://facebook.github.io/react/docs/test-utils.html#shallow-rendering) test examples, this is probably for you.

## Why there are no Flux or Isomorphic things inside?

If you are a beginner, you probably don't want a complex structure with lots of things to care about.
If you are an advanced user, and you need more features, you can choose one of the thousand existing full-stack starter kit. Or you can build your own. 

## Usage

[Download React Starterify](https://github.com/Granze/react-starterify/releases/latest)

__Install the dependencies:__

`npm install`

__Test:__

`npm run test`

__Development mode with livereload:__

`npm run watch`

__When you are done, create a production ready version of the JS bundle:__

`npm run build`

__Deploy on Github pages with one command:__

`npm run deploy`

## What's new in v2.0:

- React Router integration
- CSS processing via [PostCSS](https://github.com/postcss/postcss)
  - cssnano for minification
  - nested
  - extend
  - vars
  - autoprefixer
- gulpifle written in ES6 (ES2015)
- better folder structure
- no predefined AJAX libraries (use [Fetch](https://github.com/github/fetch) or [Superagent](https://github.com/visionmedia/superagent) if you need one).

## License

[MIT License](http://opensource.org/licenses/MIT)
