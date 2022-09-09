import { useCallback } from 'react';

import { toast } from 'react-toastify';

import { ILogManager } from './types/ILogManager';
import { IToastOptionsProps, useToastOptions } from './useToastOptions';

import 'react-toastify/dist/ReactToastify.css';

const environment = import.meta.env.VITE_APP_ENV;

const shouldDisplayConsole = environment && ['release'].includes(environment);

export const useLogManager = (options?: IToastOptionsProps): ILogManager => {
	const { getToastOptions } = useToastOptions(options);

	const logError = useCallback((error: any, errorMsg: string): void => {
		toast.error(errorMsg, getToastOptions(errorMsg));

		/* istanbul ignore if  */
		if (shouldDisplayConsole) {
			console.error(error);
		}
	}, [getToastOptions]);

	const logInformation = useCallback((informationMsg: string): void => {
		toast.info(informationMsg, getToastOptions(informationMsg));
	}, [getToastOptions]);

	const logWarning = useCallback((warningMsg: string): void => {
		toast.warning(warningMsg, getToastOptions(warningMsg));
	}, [getToastOptions]);

	const logSuccess = useCallback((successMsg: string): void => {
		toast.success(successMsg, getToastOptions(successMsg));
	}, [getToastOptions]);

	const logNotImplemented = useCallback((dataToLog: any): void => {
		toast(
			'Not implemented yet',
			getToastOptions(dataToLog),
		);

		/* istanbul ignore if  */
		if (shouldDisplayConsole) {
			console.warn(dataToLog);
		}
	}, [getToastOptions]);

	return {
		logError,
		logInformation,
		logSuccess,
		logNotImplemented,
		logWarning,
	};
};
