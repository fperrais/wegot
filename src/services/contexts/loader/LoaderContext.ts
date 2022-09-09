import { createContext } from 'react';

interface ILoaderContext {
	isLoading: boolean,
	setIsLoading: (isLoading: boolean) => void,
}

export const LoaderContext = createContext<ILoaderContext>({
	isLoading: false,
	setIsLoading: () => {
		// Nothing here.
	},
});
