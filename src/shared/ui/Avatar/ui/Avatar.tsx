import React, { CSSProperties, FC, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { useTranslation } from 'react-i18next';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

export const Avatar: FC<AvatarProps> = ({ className, src, size, alt }) => {
	const { t } = useTranslation();
  
	const styles = useMemo<CSSProperties>(() => {
		return {
			width: `${size}px`,
			height: `${size}px`,
		};
	}, [size]);
  
	return (
		<img
			alt={alt || t('Avatar image')}
			src={src || 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png'}
			style={styles}
			className={classNames(cls.avatar, {}, [className])}
		/>
	);
};

