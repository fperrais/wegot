

import { useHeightToolbar } from './useHeightToolbar';
import { useWindowSize } from './useWindowSize';


export const useRootHeight = (
	toolbarNumber: number,
	paddingRoot?: number,
) => {
	const { height } = useWindowSize();
	const heightToolbar = useHeightToolbar();

	if (!paddingRoot) {
		paddingRoot = 3 * 8;
	}

	return height - (paddingRoot * 2) - (heightToolbar * toolbarNumber);
};
