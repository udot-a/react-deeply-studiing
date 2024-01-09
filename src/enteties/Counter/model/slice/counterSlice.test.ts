import { counterActions, counterReducer } from './counterSlice';
import { CounterSchema } from '../types/counterSchema';

describe('counterSclice.test', () => {
	test('decrement', () => {
		const state: DeepPartial<CounterSchema> = {
			value: 10,
		};

		expect(counterReducer(state as CounterSchema, counterActions.decrement())).toEqual({ value: 9 });
	});

	test('increment', () => {
		const state: DeepPartial<CounterSchema> = {
			value: 10,
		};

		expect(counterReducer(state as CounterSchema, counterActions.increment())).toEqual({ value: 11 });
	});

	test('should work empty', () => {
		expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
	});
});