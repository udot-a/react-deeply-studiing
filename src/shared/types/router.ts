import { RouteProps } from 'react-router-dom';
import { UserRole } from '@/shared/const/userRole';

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRole[];
}
