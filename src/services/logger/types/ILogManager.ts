export interface ILogManager {
	logError: (error: any, errorMsg: string) => void,
	logInformation: (informationMsg: string) => void,
	logSuccess: (successMsg: string) => void,
	logWarning: (warningMsg: string) => void,
	logNotImplemented: (data: any) => void,
}
