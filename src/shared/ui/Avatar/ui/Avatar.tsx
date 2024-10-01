import React, { CSSProperties, FC, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { useTranslation } from 'react-i18next';
import { AppImage } from '../../AppImage';
import { Icon } from '../../Icon';
import UserIcon from '../../../assets/icons/default_avatar.svg';
import { Skeleton } from '../../Skeleton/Skeleton';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
	fallbackInverted?: boolean;
}

export const Avatar: FC<AvatarProps> = ({
	className,
	src,
	size,
	alt,
	fallbackInverted = false,
}) => {
	const { t } = useTranslation();

	const styles = useMemo<CSSProperties>(() => {
		return {
			width: `${size}px`,
			height: `${size}px`,
		};
	}, [size]);

	const fallback = <Skeleton width={size} height={size} border="50%" />;
	const errorFallback = <Icon inverted={fallbackInverted} Svg={UserIcon} width={size} height={size}/>;

	return (
		<AppImage
			fallback={fallback}
			errorFallback={errorFallback}
			alt={alt || t('Avatar image')}
			src={src || 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png'}
			style={styles}
			className={classNames(cls.avatar, {}, [className])}
		/>
	);
};

