import types from './types';

const toggleMenu = ({ commit }) => {
  commit(types.TOGGLE_MENU);
};

const displayConsentDialog = ({ commit }) => {
  commit(types.DISPLAY_CONSENT_DIALOG);
};

const hideConsentDialog = ({ commit }) => {
  commit(types.HIDE_CONSENT_DIALOG);
};

export default {
  toggleMenu,
  displayConsentDialog,
  hideConsentDialog,
};
