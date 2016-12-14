'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import ProfilePicture from 'components/profile-picture';
import { FlipTile, Front, Back } from 'components/flip-tile';
import Speech from 'components/speech';
import { Input, Button } from 'components/form';

import './style.scss';

export default class PhotoTile extends React.Component {
	constructor() {
		super();

		this.state = {
			flipped: false,
			form: {
				name: '',
				email: '',
				question: ''
			},
			sending: false,
			sent: false
		};
	};

	render() {
		let item = this.props.item;
		return <FlipTile className='photo-tile' flipped={this.state.flipped}>
			<Front>
				<div className='image' style={{ backgroundImage: `url(${item.photo})` }} />
				<h4>{item.title}</h4>
				<ProfilePicture className='owner-image' />
				<i className='fa fa-envelope-o' onClick={this.onFlip.bind(this, item)} />
				<div className='clearfix' />
				<div className='blurb'>{item.blurb}</div>
				<div className='clearfix' />
			</Front>
			<Back onChange={this.onChange.bind(this)}>
				<h4>More info?</h4>
				<span>Need more information or would like to purchase this? Great! Fill out the form below and I'll be in touch as soon as possible. Seriously; this email will go straight to my phone and I'll see it immediately.</span>
				<form>
					<Input name='name' autoComplete='name' placeholder='Name' value={this.state.form.name} />
					<Input type='email' name='email' autoComplete='email' placeholder='Email Address' value={this.state.form.email} />
					<Input multiple={true} name='question' placeholder="What's your question?" value={this.state.form.question} />
					<Button loading={this.state.sending} success={this.state.sent} onClick={this.onSend.bind(this)}>Send</Button>
				</form>
			</Back>
		</FlipTile>;
	};

	onFlip(item) {
		this.setState({
			item: item,
			flipped: true
		});
	};

	onChange(e) {
		var state = this.state;
		state.form[e.target.name] = e.target.value;
		this.setState(state);
	};

	onSend() {
		this.setState({
			sending: true
		});

		setTimeout(() => this.setState({ sending: false, sent: true }), 1000);
		setTimeout(() => this.setState({ sent: false }), 2000);
	};
};
