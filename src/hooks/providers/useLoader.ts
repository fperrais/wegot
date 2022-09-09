import { useCallback, useMemo } from 'react';

import { useLoaderContext } from '../../services/contexts/loader/useLoaderContext';

export const useLoader = () => {
	const { setIsLoading } = useLoaderContext();

	const load = useCallback(() => setIsLoading(true), [setIsLoading]);

	const unload = useCallback(() => setIsLoading(false), [setIsLoading]);

	return useMemo(() => ({
		load,
		unload,
	}), [load, unload]);
};
