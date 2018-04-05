import types from './types';

export default {
  [types.VALIDATE_CONSENT](state, payload) {
    state.validating = payload.key;
  },
  [types.CLEAR_VALIDATING](state) {
    state.validating = null;
  },
  [types.CONSENT_UPDATED](state, payload) {
    state.consents[payload.key] = payload;
    state.validating = null;
  },
  [types.FETCH_LIST_REQUEST](state) {
    state.fetching = true;
    state.error = null;
  },
  [types.FETCH_LIST_FAILED](state, payload) {
    state.fetching = false;
    state.error = payload;
  },
  [types.FETCH_LIST_COMPLETE](state, payload) {
    state.fetching = false;
    state.error = null;
    const data = {};
    for (const consent of payload) {
      data[consent.key] = consent;
    }
    state.consents = data;
  },
};
