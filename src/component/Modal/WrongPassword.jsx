import React from 'react';
import { Modal, ModalContent, BtnWrapper, OKbtn } from './styled';

const WrongPassword = ({ toggleWrongNum, onclickCancelBtn }) => {
	return (
		<Modal>
			<ModalContent>
				<div>
					<p>비밀번호가 다릅니다.</p>
				</div>
				<BtnWrapper>
					<OKbtn
						onClick={() => {
							toggleWrongNum();
							onclickCancelBtn();
						}}
					>
						OK
					</OKbtn>
				</BtnWrapper>
			</ModalContent>
		</Modal>
	);
};

export default WrongPassword;
