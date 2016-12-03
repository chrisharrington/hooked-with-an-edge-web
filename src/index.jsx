'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import 'file?name=index.html!./index.html';
import 'file?name=favicon.ico!./assets/favicon.ico';

import './assets/grid.min.css';

import './style.scss';

import Landing from './pages/landing/index.jsx';


class HelloWorld extends React.Component {
	render() {
		return <Landing />;
	};
};

ReactDOM.render(<HelloWorld />, document.querySelector('#container'));
