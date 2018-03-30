import types from './types';

const giveConsent = ({ commit, state }, payload) => {
  const consentState = state.consents[payload.key];
  // no matching consent
  if (!consentState) return;
  // consent already given
  if (consentState.given) return;
  if (state.validating === payload.key) {
    // the consent has been validated
    // we can really do the action
    commit(types.GIVE_CONSENT, payload);
  } else {
    commit(types.VALIDATE_GIVE_CONSENT, payload);
  }
};
const removeConsent = ({ commit, state }, payload) => {
  const consentState = state.consents[payload.key];
  // no matching consent
  if (!consentState) return;
  // consent already removed
  if (!consentState.given) return;
  if (state.validating === payload.key) {
    // the consent has been validated
    // we can really do the action
    commit(types.REMOVE_CONSENT, payload);
  } else {
    commit(types.VALIDATE_REMOVE_CONSENT, payload);
  }
};

const clearValidating = ({ commit }) => {
  commit(types.CLEAR_VALIDATING);
};

export default {
  giveConsent,
  removeConsent,
  clearValidating,
};
