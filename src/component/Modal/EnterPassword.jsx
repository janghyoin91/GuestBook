import React, { Component } from 'react';
import { Modal, ModalContent, InputWrapper, BtnWrapper, OKbtn } from './styled';

class EnterPassword extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputVal: ''
		};
	}

	confirmPassword = () => {
		const { item } = this.props;
		const { inputVal } = this.state;

		item.password === inputVal ? this.whenMatchPassword() : this.closeEnterOpenWrong();
	};

	whenMatchPassword = () => {
		const { index, deleteBtnHandler, toggleEnterNum } = this.props;

		deleteBtnHandler(index);
		toggleEnterNum();
		alert('삭제되었습니다.');
	};

	closeEnterOpenWrong = () => {
		this.props.toggleEnterNum();
		this.props.toggleWrongNum();
	};

	changeInputVal = (e) => {
		this.setState({ inputVal: e.target.value });
	};

	render() {
		const { inputVal } = this.state;
		return (
			<Modal>
				<ModalContent>
					<div>삭제하시려면 비밀번호를 입력해주세요!</div>
					<InputWrapper>
						<input value={inputVal} onChange={this.changeInputVal} />
					</InputWrapper>
					<BtnWrapper>
						<OKbtn onClick={this.confirmPassword}>OK</OKbtn>
					</BtnWrapper>
				</ModalContent>
			</Modal>
		);
	}
}

export default EnterPassword;
