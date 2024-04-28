import React, { FC, memo, MutableRefObject, ReactNode, useCallback, useRef, UIEvent } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Page.module.scss';
import { useAppDispatch, useInfiniteScroll, useInitialEffect, useThrottle } from 'shared/lib/hooks';
import { getUIScrollByPath, uiActions } from 'features/UI';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';

interface PageProps {
  className?: string;
  children: ReactNode;
	onScrollEnd?: () => void;
}

export const Page: FC<PageProps> = memo((props) => {
	const { className, children, onScrollEnd } = props;
	const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
	const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
	const dispatch = useAppDispatch();
	const { pathname } = useLocation();
	const scrollPosition = useSelector((state: StateSchema) => getUIScrollByPath(state, pathname));

	useInfiniteScroll({
		triggerRef,
		wrapperRef,
		callback: onScrollEnd,
	});

	useInitialEffect(() => {
		wrapperRef.current.scrollTop = scrollPosition;
	});

	const handleScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
		dispatch(uiActions.setScrollPosition({
			position: e.currentTarget.scrollTop,
			path: pathname,
		}));
	}, 500);

	return (
		<section
			ref={wrapperRef}
			className={classNames(cls.Page, {}, [className])}
			onScroll={handleScroll}
		>
			{children}
			{onScrollEnd ? <div className={cls.trigger} ref={triggerRef}/> : null}
		</section>
	);
});

