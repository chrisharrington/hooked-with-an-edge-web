'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Modal from 'components/modal';
import ProfilePicture from 'components/profile-picture';
import { Input } from 'components/form';
import Speech from 'components/speech';

import './style.scss';

export default class EmailModal extends React.Component {
	constructor() {
		super();

		this.state = {
			visible: false,

			form: {
				name: '',
				email: '',

			}
		};
	};

	componentWillUpdate(nextProps) {
		if (this.props.selectedItem !== nextProps.selectedItem)
			this.setState({ visible: !!nextProps.selectedItem });
	};

	render() {
		var item = this.props.selectedItem;
		return item === null ? <div></div> : <Modal title='Request Information' className='email-modal' {...this.props} visible={this.state.visible} onClose={this.onClose.bind(this)}>
			<Speech className='thanks'>Thanks for your interest! If you'd like to order one of these, let us know here. We'll get back to you as soon as possible with a cost, timeline and any other information you would like.</Speech>
			<div className='selected-item'>
				<img src={item.photo} alt='Selected Item' />
				<div className='form' onChange={this.onFormChange.bind(this)}>
					<form action="POST" method="blah" id="theform">
						<Input id='name' autocomplete='name' name='name' value={this.state.form.name} placeholder='Name' />
						<Input id='email' autocomplete='email' type='email' name='email' value={this.state.form.email} placeholder='Email Address' />
					</form>
				</div>
			</div>
		</Modal>;
	};

	onClose() {
		this.props.onCancel();
	};

	onFormChange(e) {
		var state = this.state;
		state.form[e.target.name] = e.target.value;
		this.setState(state);
	};
};
