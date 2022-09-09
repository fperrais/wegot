export const mockEntityId = '6036fc67534a050d464e2e25';

export class LocalStorageMock {
	store: {[key: string]: string};

	length: number;

	key: (index: number) => string | null;

	constructor (localStorageToUse: any) {
		this.store = {
			entity: localStorageToUse.entity,
			session: localStorageToUse.session,
		};
		this.length = 5;
		this.key = jest.fn();
	}

	clear () {
		this.store = {
		};
	}

	getItem (key: string) {
		return this.store[key] || null;
	}

	setItem (key: string, value: string) {
		this.store[key] = String(value);
	}

	removeItem (key: string) {
		delete this.store[key];
	}
}

export const getNewLocalStorage = (localStorageToUse: any) => new LocalStorageMock(localStorageToUse);
