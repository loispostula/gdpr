import axios from 'axios';
import types from './types';
import config from '../../../config';

const ENDPOINT = 'consent';

const toggleConsent = async (consentKey, value, token) => {
  const url = `${config.api_base}/${ENDPOINT}/${consentKey}/${value}/`;
  const r = await axios.post(
    url,
    {},
    {
      headers: { Authorization: `JWT ${token}` },
    },
  );
  return r.data;
};

const giveConsent = async ({ commit, state, rootGetters }, payload) => {
  const consentState = state.consents[payload.key];
  // no matching consent
  if (!consentState) return;
  // consent already given
  if (consentState.given) return;
  if (state.validating === payload.key) {
    const token = rootGetters['ui/getToken'];
    const consent = await toggleConsent(payload.key, 'give', token);
    commit(types.CONSENT_UPDATED, consent);
  } else {
    commit(types.VALIDATE_CONSENT, payload);
  }
};

const removeConsent = async ({ commit, state, rootGetters }, payload) => {
  const consentState = state.consents[payload.key];
  // no matching consent
  if (!consentState) return;
  // consent already removed
  if (!consentState.given) return;
  if (state.validating === payload.key) {
    const token = rootGetters['ui/getToken'];
    const consent = await toggleConsent(payload.key, 'remove', token);
    commit(types.CONSENT_UPDATED, consent);
  } else {
    commit(types.VALIDATE_CONSENT, payload);
  }
};

const fetchList = async ({ commit, rootGetters }) => {
  commit(types.FETCH_LIST_REQUEST);
  const url = `${config.api_base}/${ENDPOINT}/`;
  const token = rootGetters['ui/getToken'];
  try {
    const r = await axios.get(url, { headers: { Authorization: `JWT ${token}` } });
    commit(types.FETCH_LIST_COMPLETE, r.data);
  } catch (error) {
    commit(types.FETCH_LIST_FAILED);
  }
};

const clearValidating = ({ commit }) => {
  commit(types.CLEAR_VALIDATING);
};

export default {
  giveConsent,
  removeConsent,
  clearValidating,
  fetchList,
};
