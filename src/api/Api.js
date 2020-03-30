import apisauce from 'apisauce';

import { Config } from '@app/api';

const API = (baseURL = Config.baseUrl) => {
	const api = apisauce.create({ baseURL });
	const get = () => {
		const provinsi = () => api.get('/provinsi');
		const kabupaten = id => api.get(`/provinsi/${id}/kabupaten`);
		const kecamatan = id => api.get(`/provinsi/kabupaten/${id}/kecamatan`);
		const kelurahan = id => api.get(`/provinsi/kabupaten/kecamatan/${id}/desa`);
		const treeRelawan = () => api.get('/getUsers');
		return { provinsi, kabupaten, kecamatan, kelurahan, treeRelawan };
	};
	const post = () => {
		return {};
	};
	return { get, post };
};

export default API;
