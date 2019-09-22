import React from 'react';
import { Modal, ModalContent, BtnWrapper, OKbtn } from './styled';

const WrongPassword = ({ toggleWrongNum }) => {
	return (
		<Modal>
			<ModalContent>
				<div>
					<p>비밀번호가 다릅니다.</p>
				</div>
				<BtnWrapper>
					<OKbtn onClick={() => toggleWrongNum()}>OK</OKbtn>
				</BtnWrapper>
			</ModalContent>
		</Modal>
	);
};

export default WrongPassword;
