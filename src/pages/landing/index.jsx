'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Hero from './hero';
import Tiles from './tiles';

import './style.scss';

export default class Landing extends React.Component {
	render() {
		return <div className='landing'>
			<Hero />
			<Tiles />
		</div>
	};
};
