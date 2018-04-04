const isMenuVisible = state => state.menu_visible;
const isConsentDialogVisible = state => state.dialogs.consent;
const isPrivacyPolicyDialogVisible = state => state.dialogs.privacy_policy;

const getEndpoints = state => state.authentication.endpoints;
const getToken = state => state.authentication.jwt;
const isAuthenticated = (state, getters) => !!getters.getToken;

export default {
  isMenuVisible,
  isConsentDialogVisible,
  isPrivacyPolicyDialogVisible,
  getEndpoints,
  getToken,
  isAuthenticated,
};
