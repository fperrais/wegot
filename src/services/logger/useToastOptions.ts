import { useCallback, useMemo } from 'react';

import { toast, ToastOptions } from 'react-toastify';

import { useOnly } from '../../hooks/screen/useOnly';

export interface IToastOptionsProps {
	preventClose: boolean,
	persist: boolean,
}

export const useToastOptions = (options?: IToastOptionsProps) => {
	const mdmin = useOnly('md');

	const canCloseToast = useMemo(() => !(options?.preventClose === true), [options?.preventClose]);

	const getToastOptions = useCallback((id: string): ToastOptions<any> => ({
		toastId: id,
		position: mdmin ? toast.POSITION.BOTTOM_CENTER : toast.POSITION.BOTTOM_RIGHT,
		pauseOnHover: true,
		autoClose: options?.persist ? false : 5000,
		closeButton: canCloseToast,
		closeOnClick: canCloseToast,
	}), [canCloseToast, mdmin, options?.persist]);

	return {
		getToastOptions,
	};
};
