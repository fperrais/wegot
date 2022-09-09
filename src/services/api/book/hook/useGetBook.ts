import { useEffect, useState } from 'react';

import { useLoader } from '../../../../hooks/providers/useLoader';
import { useLogManager } from '../../../logger/useLogManager';
import { IBook } from '../types/IBook';
import { useBookApi } from '../useBookApi';

export const useGetBook = (bookId?: string) => {
	const { logError } = useLogManager();
	const loader = useLoader();
	const { getBook } = useBookApi();
	const [book, setBook] = useState<IBook>();

	useEffect(() => {
		if (bookId) {
			loader.load();
			getBook(bookId)
				.then((_book) => {
					setBook(_book);
				})
				.catch((error) => {
					logError(error, 'error while loading book');
				})
				.finally(() => {
					loader.unload();
				});
		}
	}, [bookId, getBook, loader, logError]);

	return {
		book,
	};
};
