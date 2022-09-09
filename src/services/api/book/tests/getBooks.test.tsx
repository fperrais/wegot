import { useState } from 'react';

import { render, screen, waitFor } from '@testing-library/react';
import nock from 'nock';

import { getNockForGet } from '../../../../tests/mocks/api/apiMock';
import { apiBasePath } from '../constantsBook';
import { useBookApi } from '../useBookApi';

const bookId = 'bookId';

const HookRenderGetBook = () => {
	const [responseReceived, setResponseReceived] = useState<boolean>(false);
	const { getBook } = useBookApi();

	getBook(bookId)
		.then(() => {
			setResponseReceived(true);
		});

	return (
		<>
			{responseReceived === true ? 'getBook works' : 'loading'}
		</>
	);
};

describe('useBookApi', () => {
	test('getBook should works correctly', async () => {
		getNockForGet(`${apiBasePath}/${bookId}`);

		render(<HookRenderGetBook />);

		await waitFor(() => expect(screen.getByText('getBook works')).toBeDefined());
	});
});

afterAll(nock.restore);

afterEach(nock.cleanAll);
