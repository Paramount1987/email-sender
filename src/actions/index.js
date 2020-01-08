import {
    REQUEST_MESSAGES,
    REQUEST_SUCCESS_MESSAGES,
    REQUEST_FAIL_MESSAGES,
    UPDATE_MESSAGE_TRACK,
    UPDATE_MESSAGE_SUCCES_TRACK,
} from '../constants';

export function requestMessages(message) {
    return {
        type: REQUEST_MESSAGES,
        payload: {
            message,
            loading: true,
        }
    }
}

export function requestSuccesMessages(updatedMessage) {
    return {
        type: REQUEST_SUCCESS_MESSAGES,
        payload: {
            message: updatedMessage,
            loading: false,
        }
    }
}

export function requestFailMessages(error) {
    return {
        type: REQUEST_FAIL_MESSAGES,
        payload: {
            loading: false,
        }
    }
}

export function updateMessageTrack(messages) {
    return {
        type: UPDATE_MESSAGE_TRACK,
        payload: {
            messages,
        }
    }
}

export function updateMessageSuccessTrack(message) {
    return {
        type: UPDATE_MESSAGE_SUCCES_TRACK,
        payload: {
            message,
        }
    }
}
