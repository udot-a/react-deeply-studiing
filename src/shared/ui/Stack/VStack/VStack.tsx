import React, { FC } from 'react';
import { Flex, FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>

export const VStack: FC<HStackProps> = ({ children, ...rest }) => {
	const { align = 'start' } = rest;

	return (
		<Flex direction="column" {...rest} align={align}>
			{children}
		</Flex>
	);
};

