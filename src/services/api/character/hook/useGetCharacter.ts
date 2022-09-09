import { useCallback, useState } from 'react';

import { useLoader } from '../../../../hooks/providers/useLoader';
import { getId } from '../../../../tools/idUtility';
import { useLogManager } from '../../../logger/useLogManager';
import { IBook } from '../../book/types/IBook';
import { ICharacter } from '../types/ICharacter';
import { useCharacterApi } from '../useCharacterApi';

export const useGetCharacters = (book: IBook) => {
	const { logError } = useLogManager();
	const loader = useLoader();
	const { getCharacter } = useCharacterApi();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const getCharacters = useCallback(async () => {
		loader.load();
		setIsLoading(true);

		const newCharacters: ICharacter[] = [];

		try {
			try {
				await Promise.all(book.characters.map(async (character) => {
					const characterId = getId(character);

					const characterResponse = await getCharacter(characterId);

					newCharacters.push(characterResponse);
				}));
			} catch (error) {
				logError(error, 'error while loading characters');
			}
		} finally {
			loader.unload();
			setIsLoading(false);
		}

		return newCharacters;
	}, [
		book.characters,
		getCharacter,
		loader,
		logError,
	]);

	return {
		isLoading,
		getCharacters,
	};
};
