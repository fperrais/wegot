import React from 'react';

import { IColor } from '../../../../themes/IColor';
import { IMockLoaderProviderProps } from '../MockLoaderProvider';
import { MockLoaderProviderWrapper } from './loader/MockLoaderProviderWrapper';
import { MockThemeProviderWrapper } from './theme/MockThemeProviderWrapper';


export interface IMockProviderWrapperProps {
	loader?: IMockLoaderProviderProps,
	theme?: IColor,
	children: React.ReactNode,
}

export const MockProviderWrapper = (
	{
		loader,
		theme,
		children,
	}: IMockProviderWrapperProps,
) => (
	<MockLoaderProviderWrapper loader={loader}>
		<MockThemeProviderWrapper theme={theme}>
			{children}
		</MockThemeProviderWrapper>
	</MockLoaderProviderWrapper>
);
