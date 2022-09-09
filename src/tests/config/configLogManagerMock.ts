export const mockEnqueueError = jest.fn();
export const mockEnqueueSuccess = jest.fn();
export const mockEnqueueInfo = jest.fn();
export const mockEnqueueDefault = jest.fn();
export const mockEnqueueWarning = jest.fn();

jest.mock('../../services/logger/useLogManager', () => (
	{
		useLogManager: () => ({
			logError: mockEnqueueError,
			logInformation: mockEnqueueInfo,
			logNotImplemented: mockEnqueueDefault,
			logSuccess: mockEnqueueSuccess,
			logWarning: mockEnqueueWarning,
		}),
	}
));
