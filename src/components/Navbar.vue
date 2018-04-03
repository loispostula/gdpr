<template>
  <div class="navbar-drawer">
    <md-list>
      <md-subheader>General</md-subheader>
      <md-list-item v-on:click="displayConsentDialog">
        <md-icon>tune</md-icon>
        <span class="md-list-item-text">Review consent</span>
      </md-list-item>
      <md-list-item v-on:click="displayPrivacyPolicyDialog">
        <md-icon>vpn_key</md-icon>
        <span class="md-list-item-text">Privacy policy</span>
      </md-list-item>
      <md-list-item>
        <md-icon>share</md-icon>
        <span class="md-list-item-text">Involved third parties</span>
      </md-list-item>
      <md-subheader>Requests</md-subheader>
      <md-list-item to="/requests">
        <md-icon>format_list_bulleted</md-icon>
        <span class="md-list-item-text">My requests</span>
      </md-list-item>
      <md-list-item to="/companies">
        <md-icon>account_balance</md-icon>
        <span class="md-list-item-text">Companies</span>
      </md-list-item>
    </md-list>
    <md-list>
      <md-subheader>Settings</md-subheader>
      <md-list-item>
        <md-icon>perm_identity</md-icon>
        <span class="md-list-item-text">My account</span>
      </md-list-item>
      <md-list-item>
        <md-icon>settings</md-icon>
        <span class="md-list-item-text">Settings</span>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const uiHelper = createNamespacedHelpers('ui');

export default {
  name: 'navbar',
  methods: uiHelper.mapActions([
    'displayConsentDialog',
    'displayPrivacyPolicyDialog',
  ]),
};
</script>

<style scoped>
.navbar-drawer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
</style>
