import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CountrySelect } from './CountrySelect';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Country } from '../model/types/country';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'enteties/CountrySelect',
	component: CountrySelect,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof CountrySelect>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect {...args} />;

export const CurrencySelectDark = Template.bind({});
CurrencySelectDark.args = {
	value: Country.China,
};

CurrencySelectDark.decorators = [StyleDecorator, ThemeDecorator(Theme.DARK)];

export const CurrencySelectLight = Template.bind({});
CurrencySelectLight.args = {
	value: Country.Britain,
};
CurrencySelectLight.decorators = [StyleDecorator, ThemeDecorator(Theme.LIGHT)];
