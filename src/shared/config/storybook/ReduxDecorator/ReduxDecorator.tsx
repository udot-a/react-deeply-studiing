import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
// eslint-disable-next-line udot-project-plugin/layer-imports
import { loginReducer } from '@/features/AuthByUsername';
// eslint-disable-next-line udot-project-plugin/layer-imports
import { profileReducer } from '@/enteties/Profile';
import { ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
// eslint-disable-next-line udot-project-plugin/layer-imports
import { articleDetailsReducer } from '@/enteties/Article';
// eslint-disable-next-line udot-project-plugin/layer-imports
import { addCommentFormSReducer } from '@/features/AddCommentForm';
// eslint-disable-next-line udot-project-plugin/layer-imports
import { articlesPageReducer } from '@/pages/ArticlesPage';
// eslint-disable-next-line udot-project-plugin/layer-imports
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage';

const defaultAsyncReducers: ReducerList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormSReducer,
  articlesPage: articlesPageReducer,
  articleDetailsPage: articleDetailsPageReducer,
};
// eslint-disable-next-line react/display-name
export const ReduxDecorator =
  (initialState: DeepPartial<StateSchema>, asyncReducers?: ReducerList) =>
  (StoryComponent: Story) => {
    return (
      <StoreProvider
        initialState={initialState as StateSchema}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <StoryComponent />
      </StoreProvider>
    );
  };
