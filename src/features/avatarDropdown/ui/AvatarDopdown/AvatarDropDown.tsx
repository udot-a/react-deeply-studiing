import React, { FC, memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Avatar } from '@/shared/ui/Avatar';
import { Dropdown } from '@/shared/ui/Popups';
import { useDispatch, useSelector } from 'react-redux';
import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from '@/enteties/User';
import { getRouteAdmin, getRouteProfile } from '@/shared/const/router';

interface AvatarDropDownProps {
  className?: string;
}

export const AvatarDropDown: FC<AvatarDropDownProps> = memo((props) => {
  const { className } = props;
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);

  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const dispatch = useDispatch();

  const isAdminPanelAvalable = isAdmin || isManager;

  const handleLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  return (
    <Dropdown
      className={classNames('', {}, [className])}
      items={[
        ...(isAdminPanelAvalable
          ? [
              {
                content: t('Admin panel'),
                href: getRouteAdmin(),
              },
            ]
          : []),
        {
          content: t('Profile'),
          href: getRouteProfile(authData?.id as string),
        },
        {
          content: t('Logout'),
          onClick: handleLogout,
        },
      ]}
      trigger={<Avatar fallbackInverted size={30} src={authData?.avatar} />}
      direction="bottom left"
    />
  );
});
