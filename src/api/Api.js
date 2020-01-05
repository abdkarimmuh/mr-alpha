import apisauce from 'apisauce';

import { Config } from '@app/api';

const API = (baseURL = Config.baseUrl) => {
	const api = apisauce.create({ baseURL });
	const get = () => {
		return {};
	};
	const post = () => {
		return {};
	};
	return { get, post };
};

export default API;
