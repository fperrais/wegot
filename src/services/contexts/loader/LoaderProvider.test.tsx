import { render, screen, fireEvent } from '@testing-library/react';

import { LoaderProvider } from './LoaderProvider';
import { useLoaderContext } from './useLoaderContext';

const LoaderContextHookStub = () => {
	const loaderContext = useLoaderContext();

	return (
		<div data-testid="children">
			<button data-testid="load-button" onClick={() => loaderContext.setIsLoading(true)}></button>
			<button data-testid="unload-button" onClick={() => loaderContext.setIsLoading(false)}></button>
		</div>
	);
};

describe('LoaderProvider', () => {
	beforeEach(() => {
		render(
			<LoaderProvider>
				<LoaderContextHookStub />
			</LoaderProvider>,
		);
	});

	test('should render children', () => {
		expect(screen.getByTestId('children')).toBeDefined();
	});

	test('should display loader when loading', () => {
		const loadButton = screen.getByTestId('load-button');

		fireEvent.click(loadButton);

		expect(screen.getByTestId('loader')).toBeDefined();
	});

	test('should stop rendering loader when unloading', () => {
		const loadButton = screen.getByTestId('load-button');

		fireEvent.click(loadButton);

		expect(screen.getByTestId('loader')).toBeDefined();

		const unloadButton = screen.getByTestId('unload-button');

		fireEvent.click(unloadButton);

		expect(screen.queryByTestId('loader')).toBeNull();
	});
});
