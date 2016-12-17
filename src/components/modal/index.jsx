'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import './style.scss';

export default class Modal extends React.Component {
	constructor() {
		super();
	};

	componentDidMount() {
		document.addEventListener('keyup', this.onEscapeKeypress.bind(this));
	};

	componentWillUnmount() {
		document.removeEventListener('keyup', this.onEscapeKeypress.bind(this));
	};

	render() {
		return <div className={`modal ${this.props.visible ? 'visible' : 'hidden'}`}>
			<div className={`modal-content ${this.props.className}`}>
				<i className='close' onClick={this.props.onClose}>✕</i>
				<h4>{this.props.title}</h4>
				<div className='child-content'>
					{this.props.children}
				</div>
			</div>
			<div className='modal-focus' />
		</div>;
	};

	onEscapeKeypress(e) {
		if (e.which === 27)
			this.props.onCancel();
	};
};
