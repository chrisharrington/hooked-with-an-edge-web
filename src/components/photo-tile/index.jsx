'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import ProfilePicture from 'components/profile-picture';

import SamplePhoto from 'assets/hat.jpg';

import './style.scss';

export default class PhotoTile extends React.Component {
	render() {
		let item = this.props.item;
		return <div className='photo-tile'>
			<div className='image' style={{ backgroundImage: `url(${SamplePhoto})` }} />
			<h4>{item.title}</h4>
			<ProfilePicture className='owner-image' />
			<i className='fa fa-envelope-o' onClick={this.props.onInfoRequested.bind(this, item)} />
			<div className='clearfix' />
			<div className='blurb'>{item.blurb}</div>
			<div className='clearfix' />
		</div>;
	};
};
