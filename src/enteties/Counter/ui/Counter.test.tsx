import { fireEvent, screen } from '@testing-library/react';
import { Counter } from './Counter';
import { renderComponent } from '@/shared/lib/tests/componentRender/componentRender';

describe('Counter', () => {
  test('Is counter increments', async () => {
    renderComponent(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });

    const button = screen.getByTestId('increment-button');
    fireEvent.click(button);
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });

  test('Is counter decrements', () => {
    renderComponent(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });

    const button = screen.getByTestId('decrement-button');
    fireEvent.click(button);
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });

  // test('Is button has clear class', () => {
  // 	render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
  // 	expect(screen.getByText('TEST')).toHaveClass('clear');
  // 	screen.debug();
  // });
});
