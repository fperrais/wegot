import { fireEvent, render, screen } from '@testing-library/react';

import { MockProviderWrapper } from '../../../tests/mocks/context/wrapper/MockProviderWrapper';
import { defaultThemeMock } from '../../../tests/mocks/data/themeMock';
import { defaultTheme, ITheme } from '../../../themes/ITheme';
import { localStorageThemeKey } from './ThemeProvider';
import { useThemeContext } from './useThemeContext';

const ThemeContextHookStub = ({ themeToDispatch }: {
	themeToDispatch?: Partial<ITheme>,
}) => {
	const { theme, setTheme } = useThemeContext();

	return (
		<div data-testid="children">
			<div>{JSON.stringify(theme)}</div>
			{
				themeToDispatch &&
                    <button data-testid="dispatch" onClick={() => setTheme(themeToDispatch)}></button>
			}
		</div>
	);
};

describe('ThemeProvider', () => {
	test('should render children', () => {
		render(
			<MockProviderWrapper theme>
				<ThemeContextHookStub />
			</MockProviderWrapper>,
		);

		expect(screen.getByTestId('children')).toBeDefined();
	});

	test('should theme be set to default if local storage is empty', () => {
		render(
			<MockProviderWrapper theme>
				<ThemeContextHookStub />
			</MockProviderWrapper>,
		);

		expect(screen.getByText(defaultTheme.color.primary.main, {
			exact: false,
		})).toBeDefined();
	});

	test('should load theme from local storage', () => {
		window.localStorage.setItem(localStorageThemeKey, JSON.stringify(defaultThemeMock));

		render(
			<MockProviderWrapper theme>
				<ThemeContextHookStub />
			</MockProviderWrapper>,
		);

		expect(screen.getByText(defaultThemeMock.color.primary.main, {
			exact: false,
		})).toBeDefined();
	});

	test('should dispatch entity and update local storage', () => {
		window.localStorage.setItem(localStorageThemeKey, JSON.stringify(defaultThemeMock));

		const themeToDispatch: ITheme = {
			...defaultThemeMock,
			color: {
				...defaultThemeMock.color,
				primary: {
					main: '#237797',
					light: '#237797',
					dark: '#237797',
					contrastText: '#ffffff',
				},
			},
		};

		render(
			<MockProviderWrapper theme>
				<ThemeContextHookStub themeToDispatch={themeToDispatch}/>
			</MockProviderWrapper>,
		);

		expect(screen.getByText(defaultThemeMock.color.primary.main, {
			exact: false,
		})).toBeDefined();

		const dispatchButton = screen.getByTestId('dispatch');

		fireEvent.click(dispatchButton);

		expect(screen.getByText(themeToDispatch.color.primary.main, {
			exact: false,
		})).toBeDefined();

		expect(JSON.parse(window.localStorage.getItem(localStorageThemeKey) ?? '')).toStrictEqual(themeToDispatch);
	});

	afterEach(() => {
		window.localStorage.clear();
	});
});
