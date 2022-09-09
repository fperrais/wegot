import { useState } from 'react';

import { render, screen, waitFor } from '@testing-library/react';
import nock from 'nock';

import { getNockForGet } from '../../../../tests/mocks/api/apiMock';
import { apiBasePath } from '../constantsCharacter';
import { useCharacterApi } from '../useCharacterApi';

const characterId = 'characterId';

const HookRenderGetCharacter = () => {
	const [responseReceived, setResponseReceived] = useState<boolean>(false);
	const { getCharacter } = useCharacterApi();

	getCharacter(characterId)
		.then(() => {
			setResponseReceived(true);
		});

	return (
		<>
			{responseReceived === true ? 'getCharacter works' : 'loading'}
		</>
	);
};

describe('useCharacterApi', () => {
	test('getCharacter should works correctly', async () => {
		getNockForGet(`${apiBasePath}/${characterId}`);

		render(<HookRenderGetCharacter />);

		await waitFor(() => expect(screen.getByText('getCharacter works')).toBeDefined());
	});
});

afterAll(nock.restore);

afterEach(nock.cleanAll);
