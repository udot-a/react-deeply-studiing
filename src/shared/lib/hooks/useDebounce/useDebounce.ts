import { useCallback, useRef } from 'react';

export function useDebounce(callback: (...args: any[]) => void, delay: number = 0) {
	const timer = useRef<NodeJS.Timeout>();

	return useCallback((...args: any[]) => {
		if (timer.current) {
			clearTimeout(timer.current);
		}
    
		timer.current = setTimeout(() => {
			callback(...args);
		}, delay);
	}, [callback, delay]);
}