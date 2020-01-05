const create = () => {
	// const TIMEOUT = 3000
	const TIMEOUT = 0;

	return {
		getUser: () =>
			new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve({ data: require('./getUser.json') });
				}, TIMEOUT);
			}),
	};
};

export default {
	create,
};
