import { SET_USER, SET_TOKEN, RESET_USER } from './types';

type State = {
	token: string,
	id: integer,
	name: string,
	email: string,
	saldo: integer,
};

const initialState: State = {
	token: undefined,
	id: undefined,
	name: undefined,
	email: undefined,
	saldo: 0,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_USER: {
			return {
				...state,
				...action.payload,
			};
		}
		case SET_TOKEN: {
			return {
				...state,
				token: action.payload,
			};
		}
		case RESET_USER: {
			return {
				...state,
				id: undefined,
				name: undefined,
				email: undefined,
				saldo: 0,
			};
		}
		default: {
			return state;
		}
	}
};
