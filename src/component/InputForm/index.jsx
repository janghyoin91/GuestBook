import React, { Component } from 'react';
import GuestbookList from '../GuestbookList';
import WrongPassword from '../Modal/WrongPassword';
import { Div, PersonalInfo, Name, PW, Span, Content, Textarea, BtnWrapper, Btn, UpdateBtn, CancelBtn } from './styled';

class InputForm extends Component {
	state = {
		list: [],
		name: null,
		password: null,
		content: null,
		data: null,
		isUpdate: null,
		wrongPW: false,
		isRegister: true
	};

	registerHandler = () => {
		let today = new Date().toISOString().slice(0, 10);
		let newItem = {
			name: this.state.name,
			password: this.state.password,
			content: this.state.content,
			date: today
		};
		this.setState({ list: [ newItem, ...this.state.list ] });
		this.clearInputVal();
	};

	updateHandler = () => {
		const { list, name, password, content, isUpdate } = this.state;

		if (password === list[isUpdate].password) {
			//비밀번호가 일치해야 수정가능
			let updatedList = [];
			list.map(
				(el, idx) =>
					idx === isUpdate
						? updatedList.push({ ...el, name: name, password: password, content: content })
						: updatedList.push(el)
			);
			this.setState({ list: updatedList, isUpdate: null, isRegister: true });
			this.clearInputVal();
			alert('방명록이 수정되었습니다.');
		} else {
			//비밀번호 불일치시 팝업창
			this.toggleWrongNum();
			this.setState({ isUpdate: null });
			this.clearInputVal();
		}
	};

	changeInputVal = (e) => {
		e.target.name === 'name'
			? this.setState({ name: e.target.value })
			: e.target.name === 'pw'
				? this.setState({ password: e.target.value })
				: this.setState({ content: e.target.value });
	};

	updateBtnHandler = (index) => {
		const { list } = this.state;
		this.setState({
			name: list[index].name,
			password: '',
			content: list[index].content,
			isUpdate: index,
			isRegister: false
		});
	};

	deleteBtnHandler = (index) => {
		const { list } = this.state;
		list.splice(index, 1);
		this.setState({ list: [ ...list ] });
	};

	toggleWrongNum = () => {
		this.state.wrongPW ? this.setState({ wrongPW: false }) : this.setState({ wrongPW: true });
	};

	clearInputVal = () => {
		this.setState({ name: '', password: '', content: '' });
	};

	onclickCancelBtn = () => {
		this.setState({ isUpdate: null, isRegister: true });
		this.clearInputVal();
	};

	render() {
		const { name, password, content, list, wrongPW, isRegister } = this.state;
		return (
			<div>
				<Div>
					<PersonalInfo>
						<Name>
							<Span>이름</Span>
							<input name="name" value={name} onChange={this.changeInputVal} />
						</Name>
						<PW>
							<Span>비밀번호</Span>
							<input name="pw" value={password} onChange={this.changeInputVal} />
						</PW>
					</PersonalInfo>
					<Content>
						<Textarea name="content" value={content} onChange={this.changeInputVal} />
					</Content>
					<BtnWrapper>
						{isRegister ? (
							<Btn onClick={this.registerHandler}>등록하기</Btn>
						) : (
							<div>
								<UpdateBtn onClick={this.updateHandler}>수정하기</UpdateBtn>
								<CancelBtn onClick={this.onclickCancelBtn}>취소</CancelBtn>
							</div>
						)}
					</BtnWrapper>
				</Div>
				<GuestbookList
					list={list}
					updateBtnHandler={this.updateBtnHandler}
					deleteBtnHandler={this.deleteBtnHandler}
					toggleWrongNum={this.toggleWrongNum}
				/>
				{wrongPW ? (
					<WrongPassword toggleWrongNum={this.toggleWrongNum} onclickCancelBtn={this.onclickCancelBtn} />
				) : null}
			</div>
		);
	}
}

export default InputForm;
