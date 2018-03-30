import types from './types';

export default {
  [types.TOGGLE_MENU](state) {
    state.menu_visible = !state.menu_visible;
  },
  [types.DISPLAY_CONSENT_DIALOG](state) {
    state.dialogs.consent = true;
  },
  [types.HIDE_CONSENT_DIALOG](state) {
    state.dialogs.consent = false;
  },
};
