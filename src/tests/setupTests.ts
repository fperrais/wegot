import { configure } from '@testing-library/react';

import '@testing-library/jest-dom';

import { getNewLocalStorage, mockEntityId } from './config/configLocalStorageMock';
import { mockEnqueueDefault,
	mockEnqueueError,
	mockEnqueueInfo,
	mockEnqueueSuccess,
	mockEnqueueWarning } from './config/configLogManagerMock';

jest.setTimeout(45000);

configure({
	asyncUtilTimeout: 5000,
});

export {
	mockEnqueueSuccess,
	mockEnqueueError,
	mockEnqueueDefault,
	mockEnqueueInfo,
	mockEnqueueWarning,
	mockEntityId,
	getNewLocalStorage,
};
