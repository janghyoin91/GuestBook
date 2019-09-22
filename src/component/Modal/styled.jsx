import styled from 'styled-components';

export const Modal = styled.div`
	position: fixed;
	z-index: 99;
	padding-top: 100px;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgba(0, 0, 0, 0.7);
	cursor: default;
`;
export const ModalContent = styled.div`
	background-color: #fff;
	margin: auto;
	padding: 15px 60px;
	border: 1px solid #888;
	border-radius: 3px;
	width: 300px;
	box-shadow: 0 1px 20px -10px rgba(32, 33, 36, .28);
	text-align: center;
`;

export const InputWrapper = styled.div`margin-bottom: 10px;`;

export const BtnWrapper = styled.div`
	width: 100%;
	text-align: center;
`;

export const OKbtn = styled.div`
	display: inline-block;
	border-radius: 3px;
	width: 30%;
	background-color: #796eff;
	color: white;
	padding: 5px 0;
	cursor: pointer;
`;
