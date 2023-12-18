import { screen } from '@testing-library/react';
import { Counter } from './Counter';
import { renderComponent } from 'shared/lib/tests/componentRender/componentRender';
import { userEvent } from '@storybook/testing-library';

describe('Counter', () => {
	test('Is counter increments', () => {
		renderComponent(<Counter />, {
			initialState: {
				counter: {
					value: 10
				},
			},
		});

		userEvent.click(screen.getByTestId('increment-button'));
		expect(screen.getByTestId('value-title')).toHaveTextContent('11');
	});

	test('Is counter decrements', () => {
		renderComponent(<Counter />, {
			initialState: {
				counter: {
					value: 10
				},
			},
		});

		userEvent.click(screen.getByTestId('decrement-button'));
		expect(screen.getByTestId('value-title')).toHaveTextContent('9');
	});

	// test('Is button has clear class', () => {
	// 	render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
	// 	expect(screen.getByText('TEST')).toHaveClass('clear');
	// 	screen.debug();
	// });
});