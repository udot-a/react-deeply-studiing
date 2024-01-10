import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CurrencySelect } from './CurrencySelect';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Currency } from '../../model/types/currency';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'enteties/CurrencySelect',
	component: CurrencySelect,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof CurrencySelect>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />;

export const CurrencySelectDark = Template.bind({});
CurrencySelectDark.args = {
	value: Currency.UAH,
};

CurrencySelectDark.decorators = [StyleDecorator, ThemeDecorator(Theme.DARK)];

export const CurrencySelectLight = Template.bind({});
CurrencySelectLight.args = {
	value: Currency.USD,
};
CurrencySelectLight.decorators = [StyleDecorator, ThemeDecorator(Theme.LIGHT)];
