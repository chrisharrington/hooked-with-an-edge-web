'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import ProfilePicture from 'components/profile-picture';

import './style.scss';

export default class Speech extends React.Component {
	render() {
		return <div className={`speech ${this.props.className}`}>
			<ProfilePicture />
			<div className='arrow' />
			<div className='message'>
				{this.props.children}
			</div>
		</div>;
	};
};
