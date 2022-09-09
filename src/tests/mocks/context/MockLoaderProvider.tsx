import { useCallback, useMemo, useState } from 'react';

import { LoaderContext } from '../../../services/contexts/loader/LoaderContext';

export interface IMockLoaderProviderProps {
	loadSpy?: () => void,
	unloadSpy?: () => void,
}

interface IMockLoaderProviderWithChildrenProps extends IMockLoaderProviderProps {
	children: React.ReactNode,
}

export const MockLoaderProvider = ({
	children,
	loadSpy,
	unloadSpy,
}: IMockLoaderProviderWithChildrenProps) => {
	const [isLoading, setIsLoading] = useState(false);

	const handleSetIsLoading = useCallback((loading: boolean) => {
		setIsLoading(loading);
		if (loading && loadSpy) {
			loadSpy();
		} else if (!loading && unloadSpy) {
			unloadSpy();
		}
	}, [loadSpy, unloadSpy]);

	const loaderContext = useMemo(() => ({
		isLoading,
		setIsLoading: handleSetIsLoading,
	}), [isLoading, handleSetIsLoading]);

	return (
		<LoaderContext.Provider value={loaderContext}>
			{children}
		</LoaderContext.Provider>
	);
};
