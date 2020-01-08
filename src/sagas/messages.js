import { call, put, takeLatest } from 'redux-saga/effects';
import {
   REQUEST_MESSAGES,
   UPDATE_MESSAGE_TRACK,
} from 'constants/index';

import {
    requestSuccesMessages,
    requestFailMessages,
    updateMessageSuccessTrack
} from 'actions/index';

import API from 'API/index';
import { getDate } from 'utils/date';
import { saveMessageLS, updateMessageToLS } from 'utils/localStorage';


function* requestMessage(action) {
   try {
     const { message } = action.payload;
     const trackId = yield call(API.getMessageTrack, message);

     const updatedMessage = {
         date: getDate(),
         title: message.subject.value,
         status: 1,
         trackId
     }

     saveMessageLS(updatedMessage);
     updatedMessage.status = yield call(API.getMessageStatus, trackId);

     yield put(requestSuccesMessages(updatedMessage));
   } catch (e) {
      yield put(requestFailMessages(e.message));
   }
}

function* updateMessageTrack(action) {
   const { messages } = action.payload;

   for (let i = 0; i < messages.length; i++) {
      const { status, trackId } = messages[i];
      if (status > -1) {
         const updatedStatus = yield call(API.getMessageStatus, trackId);

         if (+status !== +updatedStatus) {
            const updatedMessage = {
               ...messages[i],
               status: +updatedStatus
            }
            updateMessageToLS(updatedMessage);
            yield put(updateMessageSuccessTrack(updatedMessage));
         }
      }
   }
}

function* saga() {
  yield takeLatest(REQUEST_MESSAGES, requestMessage);
  yield takeLatest(UPDATE_MESSAGE_TRACK, updateMessageTrack);
}

export default saga;
