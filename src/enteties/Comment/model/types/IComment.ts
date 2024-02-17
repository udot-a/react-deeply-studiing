import { User } from 'enteties/User';

export interface IComment {
  id: string;
  user: User;
  text: string;
}