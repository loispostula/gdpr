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

const displayPrivacyPolicyDialog = ({ commit }) => {
  commit(types.DISPLAY_PRIVACY_POLICY_DIALOG);
};

const hidePrivacyPolicyDialog = ({ commit }) => {
  commit(types.HIDE_PRIVACY_POLICY_DIALOG);
};

export default {
  toggleMenu,
  displayConsentDialog,
  hideConsentDialog,
  displayPrivacyPolicyDialog,
  hidePrivacyPolicyDialog,
};
