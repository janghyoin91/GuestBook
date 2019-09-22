import React, { Component } from 'react';
import EnterPassword from '../Modal/EnterPassword';
import { Container, FirstWrapper, SecondWrapper, Name, Date, Btns, Mod, Del } from './styled';

class GuestbookEntry extends Component {
	constructor(props) {
		super(props);
		this.state = {
			enterPW: false
		};
	}

	onclickDeleteBtn = () => {
		this.setState({ enterPW: true });
	};

	toggleEnterNum = () => {
		this.state.enterPW ? this.setState({ enterPW: false }) : this.setState({ enterPW: true });
	};

	render() {
		const { enterPW } = this.state;
		const { item, index, updateBtnHandler, deleteBtnHandler, toggleWrongNum } = this.props;
		return (
			<Container>
				<FirstWrapper>{item.content}</FirstWrapper>
				<SecondWrapper>
					<Name>{item.name}</Name>
					<Date>{item.date}</Date>
					<Btns>
						<Mod onClick={() => updateBtnHandler(index)}>수정</Mod>
						<Del onClick={this.toggleEnterNum}>삭제</Del>
					</Btns>
				</SecondWrapper>
				{enterPW ? (
					<EnterPassword
						item={item}
						index={index}
						deleteBtnHandler={deleteBtnHandler}
						toggleWrongNum={toggleWrongNum}
						toggleEnterNum={this.toggleEnterNum}
					/>
				) : null}
			</Container>
		);
	}
}

export default GuestbookEntry;
