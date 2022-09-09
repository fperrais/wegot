
const setValue = <T>(key: string, value: T): void => {
	if (value !== undefined) {
		localStorage.setItem(key, JSON.stringify(value));
	} else {
		localStorage.removeItem(key);
	}
};

const getValue = <T>(key: string): T | undefined => {
	const value = localStorage.getItem(key);

	if (value) {
		try {
			return JSON.parse(value) as T;
		} catch (error) {
			// Nothing here.
		}
	}

	return undefined;
};

interface IPersistentStorageUtility<T> {
	setValue: (key: string, value: T) => void,
	getValue: (key: string) => T,
}


export const LocalStorageUtility: IPersistentStorageUtility<any> = {
	setValue,
	getValue,
};
