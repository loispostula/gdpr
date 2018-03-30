<template>
  <div>
    My superb vue counter: {{ counter_value }}
    <button v-on:click="incCounter">+</button>
    <button v-on:click="decCounter">-</button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const countersHelper = createNamespacedHelpers('counter');

export default {
  data() {
    return {
    };
  },
  computed: countersHelper.mapGetters({
    counter_value: 'getValue',
  }),
  methods: countersHelper.mapActions([
    'incCounter',
    'decCounter',
  ]),
};
</script>
