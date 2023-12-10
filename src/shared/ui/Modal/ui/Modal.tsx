import React, { FC, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import { Portal } from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal: FC<ModalProps> = (props) => {
	const {
		className,
		children,
		isOpen,
		onClose,
	} = props;

	const [isClosing, setIsClosing] = useState(false);
	const timerRef = useRef<ReturnType<typeof setTimeout>>();

	const { theme } = useTheme();

	const closeHandler = useCallback(() => {
		if (onClose) {
			setIsClosing(true);

			timerRef.current = setTimeout(() => {
				onClose();
				setIsClosing(false);
			}, ANIMATION_DELAY);
		}
	}, [onClose]);

	const onContentClick = useCallback((e: React.MouseEvent) => {
		e.stopPropagation();
	}, []);

	const onKeyDown = useCallback((e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			closeHandler();
		}
	}, [closeHandler]);

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', onKeyDown);
		} else {
			clearTimeout(timerRef.current);
			window.removeEventListener('keydown', onKeyDown);
		}
	}, [isOpen, onKeyDown]);

	const mods: Record<string, boolean> = {
		[cls.opened]: isOpen,
		[cls.isClosing]: isClosing,
	};

	return (
		<Portal>
			<div className={classNames(cls.modal, mods, [className])}>
				<div className={cls.overlay} onClick={closeHandler}>
					<div className={classNames(cls.content, {}, [cls[theme]])} onClick={onContentClick}>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	);
};

