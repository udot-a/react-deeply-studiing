import React, { FC } from 'react';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter: FC = () => {
	const dispatch = useDispatch();
	const counterValue = useSelector( getCounterValue);

	const increment = () => {
		dispatch(counterActions.increment());
	};

	const decrement = () => {
		dispatch(counterActions.decrement());
	};

	return (
		<div data-testid="counter">
			<h1 data-testid="value-title">{counterValue}</h1>
			<Button
				data-testid="increment-button"
				onClick={increment}
				theme={ButtonTheme.BORDERED}
			>
				{'increment'}
			</Button>
			<Button
				data-testid="decrement-button"
				onClick={decrement}
				theme={ButtonTheme.BORDERED}
			>
				{'decrement'}
			</Button>
		</div>
	);
};

