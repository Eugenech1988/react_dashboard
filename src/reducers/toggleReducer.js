import {
	HEADER_TOGGLE
} from 'constants/toggleConst';

const initialState = {
	isHeaderOpened: false
};

export const togglers = (state = initialState, action) => {
	switch (action.type) {
		case HEADER_TOGGLE:
			return {...state, isHeaderOpened: !state.isHeaderOpened};
		default:
			return state;
	}
};
