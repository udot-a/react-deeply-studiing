import React, { FC } from 'react';
import { Flex, FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>

export const HStack: FC<HStackProps> = ({ children, ...rest }) => {

	return (
		<Flex direction="row" {...rest}>
			{children}
		</Flex>
	);
};

