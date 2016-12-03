'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import SamplePhoto from 'assets/hat.jpg';
import ProfilePicture from 'assets/profile.png';

import './style.scss';

export default class PhotoTile extends React.Component {
	render() {
		console.log(ProfilePicture);
		let item = this.props.item;
		return <div className='photo-tile'>
			<div className='image' style={{ backgroundImage: `url(${SamplePhoto})` }} />
			<h2>{item.title}</h2>
			<img className='profile-picture' src={ProfilePicture} alt={item.creator} />
			<i className='fa fa-envelope-o' />
			<div className='clearfix' />
			<div className='blurb'>
				<div className='inner'>{item.blurb}</div>
				<div className='arrow' />
			</div>
		</div>;
	};
};
