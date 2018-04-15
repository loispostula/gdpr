import types from './types';

export default {
  [types.TOGGLE_MENU](state) {
    state.menu_visible = !state.menu_visible;
  },
  [types.SET_MENU_VISIBILITY](state, visibility) {
    state.menu_visible = visibility;
  },
  [types.DISPLAY_CONSENT_DIALOG](state) {
    state.dialogs.consent = true;
  },
  [types.HIDE_CONSENT_DIALOG](state) {
    state.dialogs.consent = false;
  },
  [types.DISPLAY_PRIVACY_POLICY_DIALOG](state) {
    state.dialogs.privacy_policy = true;
  },
  [types.HIDE_PRIVACY_POLICY_DIALOG](state) {
    state.dialogs.privacy_policy = false;
  },
  [types.SET_TOKEN](state, newToken) {
    state.authentication.jwt = newToken;
  },
  [types.REMOVE_TOKEN](state) {
    state.authentication.jwt = null;
  },
  [types.SB_CREATE](state, snackBar) {
    state.snackbar.message = snackBar;
  },
  [types.SB_QUEUE](state, snackBar) {
    state.snackbar.queued.push(snackBar);
  },
  [types.SB_QUEUE_REMOVE](state) {
    state.snackbar.queued.splice(0, 1);
  },
  [types.SB_REMOVE](state) {
    state.snackbar.message = null;
  },
};
