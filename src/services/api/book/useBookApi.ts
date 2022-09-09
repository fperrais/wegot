import { useCallback } from 'react';

import { useApi } from '../useApi';
import { apiBasePath } from './constantsBook';
import { IBookApi } from './IBookApi';
import { IBook } from './types/IBook';

export const useBookApi = (): IBookApi => {
	const client = useApi();

	const getBooks = useCallback((): Promise<IBook[]> => (
		client
			.get<IBook[]>(apiBasePath)
			.then((response) => response.data)
	), [client]);

	const getBook = useCallback((bookId: string): Promise<IBook> => (
		client
			.get<IBook>(`${apiBasePath}/${bookId}`)
			.then((response) => response.data)
	), [client]);

	return {
		getBooks,
		getBook,
	};
};
