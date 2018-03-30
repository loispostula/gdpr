import types from './types';

export default {
  [types.GIVE_CONSENT](state, payload) {
    state.consents[payload.key].given = true;
    state.validating = null;
  },
  [types.VALIDATE_GIVE_CONSENT](state, payload) {
    state.validating = payload.key;
  },
  [types.REMOVE_CONSENT](state, payload) {
    state.consents[payload.key].given = false;
    state.validating = null;
  },
  [types.VALIDATE_REMOVE_CONSENT](state, payload) {
    state.validating = payload.key;
  },
  [types.CLEAR_VALIDATING](state) {
    state.validating = null;
  },
};
