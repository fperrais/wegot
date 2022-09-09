import { useEffect, useState } from 'react';

import { useLoader } from '../../../../hooks/providers/useLoader';
import { useLogManager } from '../../../logger/useLogManager';
import { IBook } from '../types/IBook';
import { useBookApi } from '../useBookApi';

export const useGetBooks = () => {
	const { logError } = useLogManager();
	const loader = useLoader();
	const { getBooks } = useBookApi();
	const [books, setBooks] = useState<IBook[]>();

	useEffect(() => {
		loader.load();
		getBooks()
			.then((_books) => {
				setBooks(_books);
			})
			.catch((error) => {
				logError(error, 'error while loading books');
			})
			.finally(() => {
				loader.unload();
			});
	}, [getBooks, loader, logError]);

	return {
		books,
	};
};
