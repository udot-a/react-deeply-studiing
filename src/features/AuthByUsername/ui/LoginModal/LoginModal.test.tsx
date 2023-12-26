import { screen, fireEvent } from '@testing-library/react';
import { LoginModal } from './LoginModal';
import { Navbar } from 'widgets/Navbar';
import { renderComponent } from 'shared/lib/tests/componentRender/componentRender';

describe('Login Feature', () => {
	test('Is LoginModal render', () => {
		renderComponent(
			<LoginModal 
				isOpen 
				onClose={() => {}} 
			/>);
		expect(screen.getByTestId('login-modal-test')).toBeInTheDocument();
	});

	test('Is LoginModal have been opened', () => {
		const { getByTestId } = renderComponent(<Navbar />);

		fireEvent.click(getByTestId('login-button-test'));
		expect(screen.getByTestId('modal-test')).toHaveClass('opened');
	});
});