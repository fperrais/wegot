jest.mock('@material-ui/core/useMediaQuery', () => ({
	__esModule: true,
	// eslint-disable-next-line quote-props
	default: () => true,
}));

const mockUseMediaQuery = jest.fn().mockReturnValue(true);

jest.mock('@mui/material/useMediaQuery', () => ({
	__esModule: true,
	// eslint-disable-next-line quote-props
	default: (queryString: string) => mockUseMediaQuery(queryString),
}));

export { mockUseMediaQuery };
