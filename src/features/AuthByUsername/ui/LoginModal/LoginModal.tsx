import React, { FC } from 'react';
import { Modal } from 'shared/ui/Modal';
import { LoginForm } from '../LoginForm/LoginForm';
interface LoginModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
	return (
		<Modal
			{...props}
			lazy
		>
			<LoginForm />
		</Modal>
	);
};

