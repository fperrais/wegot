import { useCallback, useMemo } from 'react';

import axios, { AxiosRequestConfig } from 'axios';

import { endpoint } from './constantsApi';

const axiosOptions: AxiosRequestConfig = {
	baseURL: endpoint,
};

const axiosService = axios.create(axiosOptions);

export const useApi = () => {
	const get = useCallback(<T>(
		path: string,
		params?: any,
	) => (
		axiosService.get<T>(path, {
			params,
		})
	), []);

	return useMemo(() => ({
		get,
	}), [get]);
};
