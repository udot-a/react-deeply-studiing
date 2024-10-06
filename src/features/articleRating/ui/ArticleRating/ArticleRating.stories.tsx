import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArticleRating from './ArticleRating';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ReduxDecorator } from '@/shared/config/storybook/ReduxDecorator/ReduxDecorator';
import withMock from 'storybook-addon-mock';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'features/ArticleRating',
  component: ArticleRating,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [withMock],
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => (
  <ArticleRating {...args} />
);

export const Dark = Template.bind({});
Dark.args = {
  articleId: '10',
};
Dark.decorators = [
  StyleDecorator,
  ThemeDecorator(Theme.DARK),
  ReduxDecorator({
    user: {
      authData: {
        id: '1',
      },
    },
  }),
];
Dark.parameters = {
  mockData: [
    {
      url: `${__API__}/article-ratings?userId=1&articleId=10`,
      method: 'GET',
      status: 200,
      response: [
        {
          userId: '1',
          articleId: '10',
          rate: 1,
          feedback: 'отстой',
          id: 'II0a75O',
        },
      ],
    },
  ],
};

export const Light = Template.bind({});
Light.args = {
  articleId: '10',
};

Light.decorators = [
  StyleDecorator,
  ThemeDecorator(Theme.LIGHT),
  ReduxDecorator({
    user: {
      authData: {
        id: '1',
      },
    },
  }),
];
Light.parameters = {
  mockData: [
    {
      url: `${__API__}/article-ratings?userId=1&articleId=10`,
      method: 'GET',
      status: 200,
      response: [
        {
          userId: '1',
          articleId: '10',
          rate: 4,
          feedback: 'отстой',
          id: 'II0a75O',
        },
      ],
    },
  ],
};
