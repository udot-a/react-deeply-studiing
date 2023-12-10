import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'shared/Button',
	component: Button,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ClearDark = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ClearDark.args = {
	theme: ButtonTheme.CLEAR,
	children: 'TOGGLE',
};
ClearDark.decorators = [StyleDecorator, ThemeDecorator(Theme.DARK)];

export const ClearLight = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ClearLight.args = {
	theme: ButtonTheme.CLEAR,
	children: 'TOGGLE',
};

ClearLight.decorators = [StyleDecorator, ThemeDecorator(Theme.LIGHT)];

export const ClearInvertedLight = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ClearInvertedLight.args = {
	theme: ButtonTheme.CLEAR_INVERTED,
	children: 'TOGGLE',
};
ClearInvertedLight.decorators = [StyleDecorator, ThemeDecorator(Theme.LIGHT)];

export const ClearInvertedDark = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ClearInvertedDark.args = {
	theme: ButtonTheme.CLEAR_INVERTED,
	children: 'TOGGLE',
};
ClearInvertedDark.decorators = [StyleDecorator, ThemeDecorator(Theme.DARK)];


export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
	theme: ButtonTheme.BORDERED,
	children: 'TOGGLE',
};
PrimaryDark.decorators = [StyleDecorator, ThemeDecorator(Theme.DARK)];

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
	theme: ButtonTheme.BORDERED,
	children: 'TOGGLE',
};
PrimaryLight.decorators = [StyleDecorator, ThemeDecorator(Theme.LIGHT)];

export const OutlinedSizeL = Template.bind({});
OutlinedSizeL.args = {
	theme: ButtonTheme.BORDERED,
	children: 'TOGGLE',
	size: ButtonSize.L
};
OutlinedSizeL.decorators = [StyleDecorator, ThemeDecorator(Theme.LIGHT)];

export const OutlinedSizeXL = Template.bind({});
OutlinedSizeXL.args = {
	theme: ButtonTheme.BORDERED,
	children: 'TOGGLE',
	size: ButtonSize.XL,
};
OutlinedSizeXL.decorators = [StyleDecorator, ThemeDecorator(Theme.LIGHT)];

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
	theme: ButtonTheme.BACKGROUND,
	children: 'TOGGLE',
};
BackgroundTheme.decorators = [StyleDecorator, ThemeDecorator(Theme.LIGHT)];

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
	theme: ButtonTheme.BACKGROUND_INVERTED,
	children: 'TOGGLE',
};
BackgroundInverted.decorators = [StyleDecorator, ThemeDecorator(Theme.LIGHT)];

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
	theme: ButtonTheme.BACKGROUND_INVERTED,
	children: '>',
	square: true,
	size: ButtonSize.L,
};
SquareSizeL.decorators = [StyleDecorator, ThemeDecorator(Theme.LIGHT)];

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
	theme: ButtonTheme.BACKGROUND_INVERTED,
	children: '>',
	square: true,
	size: ButtonSize.XL,
};
SquareSizeL.decorators = [StyleDecorator, ThemeDecorator(Theme.LIGHT)];

export const Square = Template.bind({});
Square.args = {
	theme: ButtonTheme.BACKGROUND_INVERTED,
	children: '>',
	square: true,
};
Square.decorators = [StyleDecorator, ThemeDecorator(Theme.LIGHT)];
