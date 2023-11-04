import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('Button Component', () => {
	test('Is button render', () => {
		render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
		expect(screen.getByText('TEST')).toBeInTheDocument();
	});

	test('Is button has clear class', () => {
		render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
		expect(screen.getByText('TEST')).toHaveClass('clear');
		screen.debug();
	});
});