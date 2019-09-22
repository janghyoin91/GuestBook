import styled from 'styled-components';

export const Div = styled.div`
	padding: 0 10px;
	border-bottom: 0.5px solid #d9dadc;
	margin-bottom: 10px;
`;

export const PersonalInfo = styled.div`
	display: flex;
	margin-bottom: 10px;
`;
export const Name = styled.div`
	display: flex;
	flex-grow: 1;
	justify-content: flex-start;
`;
export const PW = styled.div`
	display: flex;
	flex-grow: 1;
	justify-content: flex-end;
`;
export const Span = styled.span`margin-right: 10px;`;
export const Content = styled.div`margin-bottom: 10px;`;
export const Textarea = styled.textarea`
	width: 100%;
	height: 60px;
	resize: none;
`;

export const BtnWrapper = styled.div`
	width: 100%;
	text-align: center;
	margin-bottom: 30px;
`;

export const Btn = styled.div`
	display: inline-block;
	border-radius: 3px;
	width: 50%;
	background-color: #796eff;
	color: white;
	padding: 5px 0;
	cursor: pointer;
`;
