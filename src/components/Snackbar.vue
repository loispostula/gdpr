<template>
    <md-snackbar
      v-bind:md-position="'center'"
      v-bind:md-duration="snackbar ? (snackbar.duration || 5000) : Infinity"
      v-bind:md-active="!!snackbar"
      v-bind:id="snackbar && snackbar.message"
      md-persistent
    >
      <span>{{ snackbar && snackbar.message }}</span>
    </md-snackbar>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const uiHelper = createNamespacedHelpers('ui');

export default {
  name: 'snackbar',
  computed: {
    ...uiHelper.mapGetters({
      snackbar: 'getSnackBar',
    }),
  },
};
</script>
