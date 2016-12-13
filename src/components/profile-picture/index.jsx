'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import ProfilePicture from 'assets/profile.png';

import './style.scss';

export default class Template extends React.Component {
	render() {
		return <img className={'profile-picture' + (this.props.className ? ' ' + this.props.className : '')} src={ProfilePicture} alt={'Sarah Harrington'} />;
	};
};
