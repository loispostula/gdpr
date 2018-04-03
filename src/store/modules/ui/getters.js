const isMenuVisible = state => state.menu_visible;
const isConsentDialogVisible = state => state.dialogs.consent;
const isPrivacyPolicyDialogVisible = state => state.dialogs.privacy_policy;

export default {
  isMenuVisible,
  isConsentDialogVisible,
  isPrivacyPolicyDialogVisible,
};
