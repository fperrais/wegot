import { MockLoaderProvider } from '../../MockLoaderProvider';
import { MockNoProviderWrapper } from '../MockNoProviderWrapper';
import { IMockProviderWrapperProps } from '../MockProviderWrapper';

export const MockLoaderProviderWrapper = ({ loader, children }: IMockProviderWrapperProps) => {
	if (loader) {
		return (
			<MockLoaderProvider {...loader}>
				{children}
			</MockLoaderProvider>
		);
	}

	return <MockNoProviderWrapper>{children}</MockNoProviderWrapper>;
};
