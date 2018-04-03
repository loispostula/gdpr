<template>
    <md-table
      v-bind:value="requests"
      v-bind:md-sort="ordering_key"
      v-on:update:mdSort="setOrderingKey"
      v-bind:md-sort-order="ordering_direction"
      v-on:update:mdSortOrder="setOrderingDirection"
      md-fixed-header
      md-card>
      <md-table-toolbar>
        <div class="md-toolbar-section-start">
          <h1 class="md-title">My GDPR requests</h1>
        </div>

        <md-field md-clearable class="md-toolbar-section-end">
          <md-input
            placeholder="Search requests..."
            v-bind:value="search_text"
            v-on:input="setSearchText"
          />
        </md-field>
      </md-table-toolbar>

      <md-table-empty-state
        md-label="No requests found"
        v-bind:md-description="empty_description"
      >
        <md-button class="md-primary md-raised" to="/companies">View companies</md-button>
      </md-table-empty-state>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Request" md-sort-by="request">{{ item.request }}</md-table-cell>
        <md-table-cell md-label="Company" md-sort-by="company">{{ item.company }}</md-table-cell>
        <md-table-cell md-label="Status" md-sort-by="status">{{ item.status }}</md-table-cell>
      </md-table-row>
    </md-table>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const requestsHelper = createNamespacedHelpers('requests');

export default {
  name: 'request-list',
  computed: {
    ...requestsHelper.mapGetters({
      requests: 'getSortedFilteredRequests',
      search_text: 'getSearchText',
      ordering_key: 'getOrderingKey',
      ordering_direction: 'getOrderingDirection',
    }),
    empty_description() {
      // if there is some requests, no need to do anything
      if (this.requests && this.requests.length > 0) return '';
      return this.search_text ? (
        `No request found for this '${this.search_text}' query.
         Try a different search term or make a new requests.`
      ) : ('You don\'t have any requests, make one now');
    },
  },
  methods: {
    ...requestsHelper.mapActions([
      'filterRequests',
      'setSearchText',
      'setOrderingKey',
      'setOrderingDirection',
    ]),
  },
  created() {
    this.filterRequests();
  },
};
</script>

<style scoped>

</style>
