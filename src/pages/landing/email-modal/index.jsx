'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Modal from 'components/modal';
import ProfilePicture from 'components/profile-picture';
import { Input } from 'components/form';

import './style.scss';

export default class EmailModal extends React.Component {
	constructor() {
		super();

		this.state = {
			visible: false
		};
	};

	componentWillUpdate(nextProps) {
		if (this.props.selectedItem !== nextProps.selectedItem)
			this.setState({ visible: !!nextProps.selectedItem });
	};

	render() {
		return <Modal title='Request Information' className='email-modal' {...this.props} visible={this.state.visible} onClose={this.onClose.bind(this)}>
			<div className='thanks'>
				<ProfilePicture className='owner-image' />
			</div>
			thanks for interest
			selected item

			form
				name
				email address
				textarea
		</Modal>;
	};

	onClose() {
		this.props.onCancel();
	};
};
