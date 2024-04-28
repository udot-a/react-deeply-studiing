import { CounterSchema } from 'enteties/Counter';
import { UserSchema } from 'enteties/User';
import { LoginSchema } from 'features/AuthByUsername';
import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { ProfileSchema } from 'enteties/Profile';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'enteties/Article';
import { ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage';
import { AddCommentFormSchema } from 'features/AddCommentForm';
import { ArticlesPageSchema } from 'pages/ArticlesPage';
import { UISchema } from 'features/UI';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  ui: UISchema;

  // unnecessary reducer - async
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  articleDetailsComments?: ArticleDetailsCommentsSchema;
  addCommentForm?: AddCommentFormSchema;
  articlesPage?: ArticlesPageSchema;
}

export type StateSchemaKeys = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKeys, boolean>;
export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKeys, reducer: Reducer) => void;
  remove: (key: StateSchemaKeys) => void;
  getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
  reducerManager: ReducerManager;
}

export interface ThunkExtraArgs {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArgs;
  state: StateSchema;
}