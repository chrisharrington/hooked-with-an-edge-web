'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import ProfilePicture from 'assets/profile.png';

import './style.scss';

export default class Template extends React.Component {
	render() {
		return <div className={'profile-picture' + (this.props.className ? ' ' + this.props.className : '')}>
			<img src={ProfilePicture} alt={'Sarah Harrington'} />
		</div>;
	};
};
