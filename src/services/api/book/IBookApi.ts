
import { IBook } from './types/IBook';

export interface IBookApi {
	getBooks: () => Promise<IBook[]>,
	getBook: (bookId: string) => Promise<IBook>,
}
