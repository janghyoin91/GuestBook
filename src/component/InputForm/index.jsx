import React, { Component } from 'react';
import GuestbookList from '../GuestbookList';
import WrongPassword from '../Modal/WrongPassword';
import { Div, PersonalInfo, Name, PW, Span, Content, Textarea, BtnWrapper, Btn } from './styled';

class InputForm extends Component {
	state = {
		list: [],
		name: null,
		password: null,
		content: null,
		data: null,
		isUpdate: null,
		wrongPW: false
	};

	registerBtnHandler = () => {
		const { list, name, password, content, isUpdate } = this.state;

		if (isUpdate === null) {
			let today = new Date().toISOString().slice(0, 10);
			let newItem = {
				name: this.state.name,
				password: this.state.password,
				content: this.state.content,
				date: today
			};
			this.setState({ list: [ newItem, ...this.state.list ] });
			this.clearInputVal();
		} else {
			if (password === list[isUpdate].password) {
				//비밀번호가 일치해야 수정가능
				let updatedList = [];
				list.map(
					(el, idx) =>
						idx === isUpdate
							? updatedList.push({ name: name, password: password, content: content })
							: updatedList.push(el)
				);
				this.setState({ list: updatedList, isUpdate: null });
			} else {
				//비밀번호 불일치시 팝업창
				this.toggleWrongNum();
				this.setState({ isUpdate: null });
				this.clearInputVal();
			}
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
			isUpdate: index
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

	render() {
		const { name, password, content, list, wrongPW } = this.state;
		console.log(list);
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
						<Btn onClick={this.registerBtnHandler}>등록하기</Btn>
					</BtnWrapper>
				</Div>
				<GuestbookList
					list={list}
					updateBtnHandler={this.updateBtnHandler}
					deleteBtnHandler={this.deleteBtnHandler}
					toggleWrongNum={this.toggleWrongNum}
				/>
				{wrongPW ? <WrongPassword toggleWrongNum={this.toggleWrongNum} /> : null}
			</div>
		);
	}
}

export default InputForm;
