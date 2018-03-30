<template>
  <div>
    <md-dialog v-bind:md-active="true">
      <md-dialog-title>Consent given to GDPR</md-dialog-title>
      <md-list>
        <md-list-item v-for="consent in consents" v-bind:key="consent.title">
          <div class="md-list-item-text">
            <span> {{ consent.title}} </span>
            <span> {{ consent.description }}</span>
          </div>
          <md-switch
            v-on:change="toggleConsent(consent)"
            v-bind:value="!consent.given"
          />
        </md-list-item>
      </md-list>
      <md-dialog-actions>
        <md-button class="md-primary" v-on:click="hideConsentDialog">Close</md-button>
      </md-dialog-actions>
    </md-dialog>
    <md-dialog-confirm
      v-bind:md-active="!!validating"
      v-bind:md-title="validating && validating.title"
      v-bind:md-content="validation_message"
      v-bind:md-cancel-text="'Cancel'"
      v-bind:md-confirm-text="'Send request'"
      v-on:md-confirm="toggleConsent(validating)"
      v-on:md-cancel="clearValidating"
    />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const uiHelper = createNamespacedHelpers('ui');
const consentsHelper = createNamespacedHelpers('consents');

export default {
  name: 'consent-review',
  computed: consentsHelper.mapGetters({
    consents: 'getConsents',
    validating: 'getValidating',
    validation_message: 'getValidationMessage',
  }),
  methods: {
    ...uiHelper.mapActions([
      'hideConsentDialog',
    ]),
    ...consentsHelper.mapActions([
      'giveConsent',
      'removeConsent',
      'clearValidating',
    ]),
    toggleConsent(consent) {
      return consent.given ? this.removeConsent(consent) : this.giveConsent(consent);
    },
  },
  destroyed() {
    this.clearValidating();
  },
};
</script>

<style scoped>

</style>
