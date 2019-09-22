import React, { Component } from 'react';
import GuestbookEntry from '../GuestbookEntry';

class GuestbookList extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const { list, updateBtnHandler, deleteBtnHandler, toggleWrongNum } = this.props;
		return list.map((item, index) => (
			<GuestbookEntry
				item={item}
				index={index}
				updateBtnHandler={updateBtnHandler}
				deleteBtnHandler={deleteBtnHandler}
				toggleWrongNum={toggleWrongNum}
			/>
		));
	}
}

export default GuestbookList;
