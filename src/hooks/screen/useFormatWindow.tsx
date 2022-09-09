import { useWindowSize } from './useWindowSize';

export const useFormatWindow = (): 'landscape' | 'portrait' => {
	const size = useWindowSize();

	return size.width > size.height ? 'landscape' : 'portrait';
};
