import { IApiStatus } from '../../src/shared/interfaces';
export const getPort = () => {
	return 4206;
}

export const apiStatus = (): IApiStatus => {
	return {
		status: "live",
		whenLiveAgainDateTime: "2024-01-14 19:00:00"
	}
}