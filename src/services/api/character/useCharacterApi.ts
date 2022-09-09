import { useCallback } from 'react';

import { useApi } from '../useApi';
import { apiBasePath } from './constantsCharacter';
import { ICharactersApi } from './ICharacterApi';
import { ICharacter } from './types/ICharacter';

export const useCharacterApi = (): ICharactersApi => {
	const client = useApi();

	const getCharacter = useCallback((characterId: string): Promise<ICharacter> => (
		client
			.get<ICharacter>(`${apiBasePath}/${characterId}`)
			.then((response) => response.data)
	), [client]);

	return {
		getCharacter,
	};
};
