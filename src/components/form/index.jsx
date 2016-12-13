'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

export class Input extends React.Component {
	constructor() {
		super();

		this.state = {
			focus: false
		};
	};

	render() {
		var props = this.props;
		props.type = props.type || 'text';
		return <div className='form-input'>
			<input {...props} onFocus={this.onFocus.bind(this, true)} onBlur={this.onFocus.bind(this, false)} />
			<div className='focus' />			
		</div>;
	};

	onFocus(focus) {
		this.setState({
			focus: focus
		});
	};
};
