import axios from 'axios';
import jwtDecode from 'jwt-decode';
import config from '../../../config';

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

// AUTHENTICATION

const register = async ({ commit }, payload) => {
  const r = await axios.post(
    `${config.backend_url}/api/register/`, payload,
  );
  const token = r.data.token;
  localStorage.setItem('t', token);
  commit(types.SET_TOKEN, token);
  return r.data;
};

const obtainToken = async ({ commit }, payload) => {
  try {
    const r = await axios.post(
      `${config.backend_url}/auth/obtain_token/`, payload,
    );
    const token = r.data.token;
    localStorage.setItem('t', token);
    commit(types.SET_TOKEN, token);
  } catch (error) {
    console.log(error);
  }
};

const refreshToken = async ({ commit, getters }) => {
  const payload = {
    token: getters.getToken,
  };
  try {
    const r = await axios.post(
      `${config.backend_url}/auth/refresh_token/`, payload,
    );
    const token = r.data.token;
    localStorage.setItem('t', token);
    commit(types.SET_TOKEN, token);
  } catch (error) {
    console.log(error);
  }
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

// SNACKBAR

const addAndTimeRemoveSnack = ({ commit, dispatch }, snackBar) => {
  commit(types.SB_CREATE, snackBar);
  const duration = snackBar.duration || config.snack_bar_duration;
  setTimeout(() => {
    dispatch('removeSnackBar', snackBar);
  }, duration);
};

const createSnackBar = ({ commit, getters, dispatch }, snackBar) => {
  const displayed = getters.getSnackBar;
  const queued = getters.getSnackBarQueued;
  if (!displayed && queued.length === 0) {
    dispatch('addAndTimeRemoveSnack', snackBar);
  } else {
    commit(types.SB_QUEUE, snackBar);
  }
};

const removeSnackBar = ({ commit, getters, dispatch }) => {
  // when we remove a snackbar, we need to add the one that are in the queue
  commit(types.SB_REMOVE);
  setTimeout(() => {
    const queued = getters.getSnackBarQueued;
    if (queued.length) {
      const snack = queued[0];
      commit(types.SB_QUEUE_REMOVE);
      dispatch('addAndTimeRemoveSnack', snack);
    }
  }, 50);
};

export default {
  toggleMenu,
  setMenuVisibility,
  displayConsentDialog,
  hideConsentDialog,
  displayPrivacyPolicyDialog,
  hidePrivacyPolicyDialog,
  register,
  obtainToken,
  refreshToken,
  inspectToken,
  logout,
  createSnackBar,
  removeSnackBar,
  addAndTimeRemoveSnack,
};
