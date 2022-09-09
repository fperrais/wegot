import { useMemo, useState } from 'react';

import { Loader } from './Loader';
import { LoaderContext } from './LoaderContext';

interface ILoaderProviderProps {
	children: React.ReactNode,
}

export const LoaderProvider = ({ children }: ILoaderProviderProps) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const loaderContext = useMemo(() => ({
		isLoading,
		setIsLoading,
	}), [isLoading, setIsLoading]);

	return (
		<LoaderContext.Provider value={loaderContext}>
			{isLoading && <Loader />}
			{children}
		</LoaderContext.Provider>
	);
};
