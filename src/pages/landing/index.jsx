'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Hero from './hero';
import Tiles from './tiles';
import EmailModal from './email-modal';

import './style.scss';

export default class Landing extends React.Component {
	constructor() {
		super();

		this.state = {
			selectedItem: null
		}
	};

	render() {
		return <div className='landing'>
			<Hero />
			<Tiles onInfoRequested={this.onInfoRequested.bind(this)} />
			<EmailModal selectedItem={this.state.selectedItem} onCancel={this.onCancelInfoRequested.bind(this)} />
		</div>
	};

	onInfoRequested(selectedItem) {
		this.setState({
			selectedItem: selectedItem
		});
	};

	onCancelInfoRequested() {
		this.setState({
			selectedItem: null
		});
	};
};
