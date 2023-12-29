import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

describe('Button Component', () => {
	test('Is button render', () => {
		render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
		expect(screen.getByText('TEST')).toBeInTheDocument();
	});

	test('Is button has clear class', () => {
		render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
		expect(screen.getByText('TEST')).toHaveClass('clear');
		screen.debug();
	});

	test('Is button has disabled class', () => {
		render(<Button theme={ButtonTheme.CLEAR} disabled >TEST</Button>);
		expect(screen.getByText('TEST')).toHaveClass('disabled');
	});
});