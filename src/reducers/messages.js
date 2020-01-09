import {
    REQUEST_MESSAGES,
    REQUEST_SUCCESS_MESSAGES,
    REQUEST_FAIL_MESSAGES,
    UPDATE_MESSAGE_SUCCES_TRACK
} from '../constants';

import { getMessagesFromLS } from 'utils/localStorage';

const msgLS = getMessagesFromLS();

const initialState = {
    data: (msgLS && msgLS.length) ? msgLS : [],
    loading: false,
    currentMessage: {},
};

export default (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case REQUEST_MESSAGES:
            return {
                ...state,
                currentMessage: payload.message,
                loading: payload.loading
            };
        case REQUEST_SUCCESS_MESSAGES:
            return {
                ...state,
                data: [...state.data, payload.message],
                loading: payload.loading
            };
        case REQUEST_FAIL_MESSAGES:
            return {
                ...state,
                loading: payload.loading
            };
        case UPDATE_MESSAGE_SUCCES_TRACK:
            const { message } = payload;
            const idx = state.data.findIndex(el => el.trackId === message.trackId);
            state.data.splice(idx, 1, message);

            return {
                ...state,
                data: [...state.data]
            }
        default:
            return state;
    }
}