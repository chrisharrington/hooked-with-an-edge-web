'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Spinner from 'components/spinner';

import './style.scss';

export class Input extends React.Component {
	constructor() {
		super();

		this.state = {
			focus: false
		};
	};

	render() {
		var props = Object.assign({
			type: 'text',
			onFocus: this.onFocus.bind(this, true),
			onBlur: this.onFocus.bind(this, false),
			className: 'field'
		}, this.props);
		return <div className={'form-input' + (this.state.focus ? ' focus' : '')}>
			{this.props.multiple ? <textarea {...props}></textarea> : <input {...props} />}
			<div className='focus-bar' />			
		</div>;
	};

	onFocus(focus) {
		this.setState({
			focus: focus
		});
	};
};

export class Button extends React.Component {
	render() {
		return <button type='button' onClick={this.props.onClick} disabled={this.props.loading || this.props.success} className={`${this.props.className || ''} ${this.props.loading ? ' loading' : ''} ${this.props.success ? ' success' : ''}`}>
			<div className='loading-inner'>
				<Spinner />
			</div>
			<div className='success-inner'>
				<i className='fa fa-check' />
			</div>
			<div className='content'>
				{this.props.children}
			</div>
		</button>
	}
}