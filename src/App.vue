<template>
  <div id="app">
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="toggleMenu">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">GDPR</span>
      </md-app-toolbar>
      <md-app-drawer v-on:update:mdActive="toggleMenu" :md-active.sync="menu_visible">
        <navbar />
      </md-app-drawer>
      <md-app-content>
        <router-view/>
        <consent-review v-if="consent_review_visible"/>
        <privacy-policy v-if="privacy_policy_visible" />
      </md-app-content>
    </md-app>
    <snackbar />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import Navbar from './components/Navbar';
import ConsentReview from './components/ConsentReview';
import PrivacyPolicy from './components/PrivacyPolicy';
import Snackbar from './components/Snackbar';

const uiHelper = createNamespacedHelpers('ui');

export default {
  name: 'App',
  components: {
    Navbar,
    PrivacyPolicy,
    ConsentReview,
    Snackbar,
  },
  computed: {
    ...uiHelper.mapGetters({
      consent_review_visible: 'isConsentDialogVisible',
      privacy_policy_visible: 'isPrivacyPolicyDialogVisible',
    }),
    menu_visible: {
      get() {
        return this.$store.getters['ui/isMenuVisible'];
      },
      set(value) {
        this.$store.dispatch('ui/setMenuVisibility', value);
      },
    },
  },
  methods: uiHelper.mapActions([
    'toggleMenu',
    'inspectToken',
  ]),
  mounted() {
    this.inspectToken();
  },
  updated() {
    this.inspectToken();
  },
};
</script>

<style lang="scss">
#app {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .md-app {
    border: 1px solid rgba(#000, .12);
    width: 100%;
    height: 100%;
  }
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
}
</style>
