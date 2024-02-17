import { IComment } from 'enteties/Comment';
import { EntityState } from '@reduxjs/toolkit';

export interface ArticleDetailsCommentsSchema extends EntityState<IComment>{
  isLoading: boolean;
  error?: string;
  data?: IComment[];
}
