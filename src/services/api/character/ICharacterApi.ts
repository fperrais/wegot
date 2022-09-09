
import { ICharacter } from './types/ICharacter';

export interface ICharactersApi {
	getCharacter: (characterId: string) => Promise<ICharacter>,
}
