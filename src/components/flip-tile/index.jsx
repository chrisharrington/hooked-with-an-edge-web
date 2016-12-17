'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import './style.scss';

export class FlipTile extends React.Component {
	render() {
		return <div className={`flip-tile-container ${this.props.className} ${this.props.flipped ? 'flipped' : ''}`}>
			<div className='flip-tile-inner'>
				{this.props.children}
			</div>
		</div>;
	};
};

export class Front extends React.Component {
	render() {
		return <div {...this.props} className='flip-tile front'>
			{this.props.children}
		</div>;
	};
};

export class Back extends React.Component {
	render() {
		return <div {...this.props} className='flip-tile back'>
			{this.props.children}
		</div>;
	};
};