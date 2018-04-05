import axios from 'axios';
import jwtDecode from 'jwt-decode';

import types from './types';

const toggleMenu = ({ commit }) => {
  commit(types.TOGGLE_MENU);
};

const setMenuVisibility = ({ commit }, payload) => {
  commit(types.SET_MENU_VISIBILITY, payload);
};

const displayConsentDialog = ({ commit }) => {
  commit(types.DISPLAY_CONSENT_DIALOG);
};

const hideConsentDialog = ({ commit }) => {
  commit(types.HIDE_CONSENT_DIALOG);
};

const displayPrivacyPolicyDialog = ({ commit }) => {
  commit(types.DISPLAY_PRIVACY_POLICY_DIALOG);
};

const hidePrivacyPolicyDialog = ({ commit }) => {
  commit(types.HIDE_PRIVACY_POLICY_DIALOG);
};

const obtainToken = ({ commit, getters }, payload) => axios.post(
  getters.getEndpoints.obtainJWT, payload,
).then(
  (r) => {
    const token = r.data.token;
    localStorage.setItem('t', token);
    commit(types.SET_TOKEN, token);
  },
).catch(e => console.log(e));

const refreshToken = ({ commit, getters }) => {
  const payload = {
    token: getters.getToken,
  };
  axios.post(getters.getEndpoints.refreshJWT, payload).then(
    (r) => {
      const token = r.data.token;
      localStorage.setItem('t', token);
      commit(types.SET_TOKEN, token);
    },
  ).catch(e => console.log(e));
};

const inspectToken = ({ dispatch, getters }) => {
  const token = getters.getToken;
  if (!token) return;
  const decoded = jwtDecode(token);
  const exp = decoded.exp;
  const origIat = decoded.orig_iat;
  const dtFromNow = exp - (Date.now() / 1000);
  if (dtFromNow < 0) {
    // we should be logged out
    dispatch('logout');
  }
  if (exp - (Date.now() / 1000) < 1800 && (Date.now() / 1000) - origIat < 628200) {
    dispatch('refreshToken');
  }
};

const logout = ({ commit }) => {
  localStorage.removeItem('t');
  commit(types.REMOVE_TOKEN);
};

export default {
  toggleMenu,
  setMenuVisibility,
  displayConsentDialog,
  hideConsentDialog,
  displayPrivacyPolicyDialog,
  hidePrivacyPolicyDialog,
  obtainToken,
  refreshToken,
  inspectToken,
  logout,
};
