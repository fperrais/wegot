export const getId = (url: string): string => {
	const [id] = url.split('/').slice(-1);

	return id;
};
