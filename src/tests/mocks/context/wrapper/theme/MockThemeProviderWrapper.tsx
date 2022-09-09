
import { ThemeProvider } from '../../../../../services/contexts/theme/ThemeProvider';
import { MockNoProviderWrapper } from '../MockNoProviderWrapper';
import { IMockProviderWrapperProps } from '../MockProviderWrapper';

export const MockThemeProviderWrapper = ({ theme, children }: IMockProviderWrapperProps) => {
	if (theme) {
		return (
			<ThemeProvider {...theme}>
				{children}
			</ThemeProvider>
		);
	}

	return <MockNoProviderWrapper>{children}</MockNoProviderWrapper>;
};
