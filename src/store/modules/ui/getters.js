const isMenuVisible = state => state.menu_visible;
const isConsentDialogVisible = state => state.dialogs.consent;
const isPrivacyPolicyDialogVisible = state => state.dialogs.privacy_policy;

const getToken = state => state.authentication.jwt;
const isAuthenticated = (state, getters) => !!getters.getToken;

const getSnackBar = state => state.snackbar.messages;
const getSnackBarQueued = state => state.snackbar.queued;

export default {
  isMenuVisible,
  isConsentDialogVisible,
  isPrivacyPolicyDialogVisible,
  getToken,
  isAuthenticated,
  getSnackBar,
  getSnackBarQueued,
};
