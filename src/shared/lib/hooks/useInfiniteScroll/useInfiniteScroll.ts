import { MutableRefObject, useEffect, useRef } from 'react';

interface UseInfiniteScrollProps {
  callback?: () => void;
  triggerRef: MutableRefObject<HTMLDivElement>;
  wrapperRef: MutableRefObject<HTMLElement>;
}

export const useInfiniteScroll = ({ callback, wrapperRef, triggerRef }: UseInfiniteScrollProps) => {
	const currentObserveNumber = useRef(0);

	useEffect(() => {
		let observer: IntersectionObserver | null = null;
		const wrapperElement = wrapperRef.current;
		const triggerElement = triggerRef.current;

		if (callback && wrapperElement) {
			const options = {
				root: wrapperElement,
				rootMargin: '0px',
				threshold: 1.0,
			};

			observer = new IntersectionObserver(([entry]) => {
				if (entry.isIntersecting && currentObserveNumber.current) {
					callback();
					// console.log('I am here!!!');
				}

				currentObserveNumber.current = currentObserveNumber.current + 1;
			}, options);

			observer.observe(triggerElement);

		}

		return () => {
			if (observer) {
				// eslint-disable-next-line react-hooks/exhaustive-deps
				observer.unobserve(triggerRef.current);
			}

			if (currentObserveNumber.current) {
				currentObserveNumber.current = 0;
			}
		};
	}, [callback, triggerRef, wrapperRef]);
};