'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

import PhotoTile from 'components/photo-tile';

import Items from 'items.json';

const COLUMN_COUNT = 3;

export default class Tiles extends React.Component {
	constructor() {
		super();

		this.state = {
			items: Items
		}
	};

	render() {
		var groups = _.chunk(this.state.items, COLUMN_COUNT);
		return <div className='container tiles'>
			{groups.map((group, i) => {
				return <div className='row' key={i}>
					{group.map((item, i) => {
						return <div className={'col-md-' + (12 / COLUMN_COUNT)} key={i}>
							<PhotoTile item={item} />
						</div>;
					})}
				</div>;
			})}
		</div>;
	};
};
