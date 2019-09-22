import styled from 'styled-components';

export const Container = styled.div`
	padding: 0 20px;
	border-bottom: 1px dashed #d9dadc;
`;

export const FirstWrapper = styled.div`margin-bottom: 10px;`;
export const SecondWrapper = styled.div`
	display: flex;
	margin-bottom: 20px;
`;

export const Name = styled.div`
	display: flex;
	flex-grow: 1;
	justify-content: flex-start;
	margin-right: 30px;
`;
export const Date = styled.div`
	display: flex;
	flex-grow: 1;
`;
export const Btns = styled.div`
	display: flex;
	flex-grow: 3;
	justify-content: flex-end;
`;

export const Mod = styled.div`
	border: 1px solid #796eff;
	color: #796eff;
	border-radius: 3px;
	padding: 2px 12px;
	font-size: 13px;
	margin-right: 10px;
	cursor: pointer;
	:hover {
		background-color: #796eff;
		color: #fff;
	}
`;

export const Del = styled.div`
	border: 1px solid #796eff;
	color: #796eff;
	border-radius: 3px;
	padding: 2px 12px;
	cursor: pointer;
	font-size: 13px;
	:hover {
		background-color: #796eff;
		color: #fff;
	}
`;
