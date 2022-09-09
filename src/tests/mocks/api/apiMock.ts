import nock, { RequestBodyMatcher } from 'nock';

import { endpoint } from '../../../services/api/constantsApi';

export const CROSS_ORIGIN_HEADERS = {
	'access-control-allow-origin': '*',
	'access-control-allow-credentials': 'true',
};

export const AUTHORISATION_HEADER = {
	'access-control-allow-headers': 'Authorization',
};

const cleanApiUrl = (apiUrl: string): string => apiUrl.startsWith('/') ? apiUrl : `/${apiUrl}`;

type callNockFunc = (uri: string, body: nock.Body) => nock.Body;

const returnWithSpy = (response?: any, spyOn?: (uri: string, body: any) => void): callNockFunc => {
	const interceptWithSpy: callNockFunc = (uri: string, body: nock.Body): nock.Body => {
		if (spyOn) {
			spyOn(uri, body);
		}

		return response;
	};

	return interceptWithSpy;
};


export const getNockForGet = (
	apiUrl: string,
	response?: any,
	spyOn?: (uri: string, body: any) => void,
	queryParams?: any,
) => {
	nock.disableNetConnect();

	const nockApiUrl = cleanApiUrl(apiUrl);

	let scope = nock(endpoint).defaultReplyHeaders({
		...CROSS_ORIGIN_HEADERS,
	})
		.persist()
		.options(nockApiUrl);

	if (queryParams) {
		scope = scope.query(queryParams);
	}
	scope = scope
		.reply(200, {
		}, {
			...AUTHORISATION_HEADER,
		})
		.get(nockApiUrl);

	if (queryParams) {
		scope = scope.query(queryParams);
	}

	return scope.reply(200, returnWithSpy(response, spyOn));
};

export const getNockForGetInError = (apiUrl: string, spyOn?: (uri: string, body: any) => void, queryParams?: any) => {
	nock.disableNetConnect();

	const nockApiUrl = cleanApiUrl(apiUrl);

	let scope = nock(endpoint).defaultReplyHeaders({
		...CROSS_ORIGIN_HEADERS,
	})
		.persist()
		.options(nockApiUrl);

	if (queryParams) {
		scope = scope.query(queryParams);
	}
	scope = scope
		.reply(200, {
		}, {
			...AUTHORISATION_HEADER,
		})
		.get(nockApiUrl);

	if (queryParams) {
		scope = scope.query(queryParams);
	}

	return scope.reply(500, returnWithSpy('FAILED!', spyOn));
};


export const getNockForPostError = (apiUrl: string) => {
	nock.disableNetConnect();

	const nockApiUrl = cleanApiUrl(apiUrl);

	return nock(endpoint).defaultReplyHeaders({
		...CROSS_ORIGIN_HEADERS,
	})
		.persist()
		.options(nockApiUrl)
		.reply(200, {
		}, {
			...AUTHORISATION_HEADER,
		})
		.post(nockApiUrl)
		.reply(400);
};


export const getNockForPostSuccess = (apiUrl: string, spyOn?: (uri: string, body: any) => any) => {
	nock.disableNetConnect();

	const nockApiUrl = cleanApiUrl(apiUrl);

	return nock(endpoint).defaultReplyHeaders({
		...CROSS_ORIGIN_HEADERS,
	})
		.persist()
		.options(nockApiUrl)
		.reply(200, {
		}, {
			...AUTHORISATION_HEADER,
		})
		.post(nockApiUrl)
		.reply(200, spyOn);
};


export const getNockForPutSuccess = (apiUrl: string, spyOn?: (uri: string, body: any) => void) => {
	nock.disableNetConnect();

	const nockApiUrl = cleanApiUrl(apiUrl);

	return nock(endpoint).defaultReplyHeaders({
		...CROSS_ORIGIN_HEADERS,
	})
		.persist()
		.options(nockApiUrl)
		.reply(200, {
		}, {
			...AUTHORISATION_HEADER,
		})
		.put(nockApiUrl)
		.reply(200, spyOn);
};

export const getNockForPutError = (apiUrl: string) => {
	nock.disableNetConnect();

	const nockApiUrl = cleanApiUrl(apiUrl);

	return nock(endpoint).defaultReplyHeaders({
		...CROSS_ORIGIN_HEADERS,
	})
		.persist()
		.options(nockApiUrl)
		.reply(200, {
		}, {
			...AUTHORISATION_HEADER,
		})
		.put(nockApiUrl)
		.reply(400);
};

export const getNockForDeleteOneSuccess = (apiUrl: string) => {
	nock.disableNetConnect();

	const nockApiUrl = cleanApiUrl(apiUrl);

	return nock(endpoint).defaultReplyHeaders({
		...CROSS_ORIGIN_HEADERS,
	})
		.persist()
		.options(nockApiUrl)
		.reply(200, {
		}, {
			...AUTHORISATION_HEADER,
		})
		.delete(nockApiUrl)
		.reply(200);
};

export const getNockForDeleteManySuccess = (
	apiUrl: string,
	ids: string[],
	spyOn?: (uri: string, body: any) => void,
) => {
	nock.disableNetConnect();

	const nockApiUrl = cleanApiUrl(apiUrl);

	const body: RequestBodyMatcher = ids;

	return nock(endpoint).defaultReplyHeaders({
		...CROSS_ORIGIN_HEADERS,
	})
		.persist()
		.options(nockApiUrl)
		.reply(200, {
		}, {
			...AUTHORISATION_HEADER,
		})
		.delete(nockApiUrl, body)
		.reply(200, spyOn);
};

export const getNockForDeleteOneError = (apiUrl: string) => {
	nock.disableNetConnect();

	const nockApiUrl = cleanApiUrl(apiUrl);

	return nock(endpoint).defaultReplyHeaders({
		...CROSS_ORIGIN_HEADERS,
	})
		.persist()
		.options(nockApiUrl)
		.reply(200, {
		}, {
			...AUTHORISATION_HEADER,
		})
		.delete(nockApiUrl)
		.reply(400);
};

export const getNockForDeleteManyError = (apiUrl: string, ids: string[], spyOn?: (uri: string, body: any) => void) => {
	nock.disableNetConnect();

	const nockApiUrl = cleanApiUrl(apiUrl);

	const body: RequestBodyMatcher = ids;

	return nock(endpoint).defaultReplyHeaders({
		...CROSS_ORIGIN_HEADERS,
	})
		.persist()
		.options(nockApiUrl)
		.reply(200, {
		}, {
			...AUTHORISATION_HEADER,
		})
		.delete(nockApiUrl, body)
		.reply(400, spyOn);
};
