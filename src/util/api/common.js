import axios from 'axios';

export const login = (id, password) => {
	return axios.post('url', {
		id,
		password,
	});
};
