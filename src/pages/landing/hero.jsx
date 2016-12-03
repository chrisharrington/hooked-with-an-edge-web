'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import HeroImage from "assets/hero.jpg";

export default class Hero extends React.Component {
	render() {
		return <div className='hero'>
			<div style={{ backgroundImage: 'url(' + HeroImage + ')' }}></div>
		</div>;
	};
};
