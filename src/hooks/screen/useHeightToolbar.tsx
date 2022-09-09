import { useFormatWindow } from './useFormatWindow';
import { useUp } from './useUp';

export const useHeightToolbar = (): 64 | 56 | 48 => {
	let height: 64 | 56 | 48 = 64;
	const format = useFormatWindow();
	const upSm = useUp('sm');

	if (upSm) {
		height = 64;
	} else {
		height = format === 'landscape' ? 48 : 56;
	}

	return height;
};
