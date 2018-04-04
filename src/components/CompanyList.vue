<template>
    <md-card>
      <md-toolbar class="md-transparent" md-elevation="0">
        <div class="md-toolbar-section-start">
          <span class="md-title">Companies</span>
        </div>
        <div class="md-toolbar-section-end md-layout md-gutter">
          <div class="md-layout-item md-xlarge-size-35 md-large-size-35
           md-medium-size-35 md-small-size-60 md-xsmall-size-100">
            <md-field>
              <label for="orderby">Order by</label>
              <md-select
                  id="orderby"
                  name="orderby"
                  v-bind:value="ordering_key"
                  v-on:md-selected="setOrderingKey"
              >
                <md-option />
                <md-option value="name">Name</md-option>
                <md-option value="request_sent">Request sent</md-option>
                <md-option value="request_served">Request served</md-option>
              </md-select>
            </md-field>
          </div>
          <div class="md-layout-item md-xlarge-size-20 md-large-size-20
           md-medium-size-20 md-small-size-40 md-xsmall-size-100">
            <md-field>
              <label for="orderdir">Order Direction</label>
              <md-select
                id="orderdir"
                name="orderdir"
                v-bind:value="ordering_direction"
                v-on:md-selected="setOrderingDirection"
              >
                <md-option />
                <md-option value="asc">Asc</md-option>
                <md-option value="desc">Desc</md-option>
              </md-select>
            </md-field>
          </div>
          <div class="md-layout-item md-xlarge-size-35 md-large-size-35
           md-medium-size-35 md-small-size-100">
            <md-field>
              <label for="search">Search text</label>
              <md-input
                id="search"
                name="search"
                v-bind:value="search_text"
                v-on:input="setSearchText"
              />
            </md-field>
          </div>
        </div>
      </md-toolbar>
        <md-card v-for="company in companies" v-bind:key="company.title">

          <md-card-header>
            <div class="md-title">{{ company.name }}</div>
            <div class="md-subhead" v-if="company.request_sent > 0">
              Answered {{ company.request_served }}
              request{{ company.request_served > 0 ? 's' : ''  }}
              on {{ company.request_sent }} sent.
            </div>
          </md-card-header>

          <md-card-actions md-alignment="space-between">
            <md-card-media md-medium md-ratio="1/1">
              <img v-bind:src="company.logo" alt="People">
            </md-card-media>
            <md-card-actions class="action-holder">
              <div class="button-holder"
              >
                <md-button v-on:click="() => requestDataOverview(company)">
                  Get data
                </md-button>
              </div>
              <div class="button-holder"
              >
                <md-button v-on:click="() => requestDeleteData(company)">
                  Delete data
                </md-button>
              </div>
              <div class="button-holder"
              >
                <md-button v-on:click="() => requestRemoveConsent(company)">
                  Remove consent
                </md-button>
              </div>
              <div class="button-holder"
              >
                <md-button v-on:click="() => requestUpdateInfo(company)">
                  Update data
                </md-button>
              </div>
            </md-card-actions>
          </md-card-actions>
        </md-card>
    </md-card>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const companiesHelper = createNamespacedHelpers('companies');

export default {
  name: 'companies',
  computed: {
    ...companiesHelper.mapGetters({
      companies: 'getSortedFilteredCompanies',
      search_text: 'getSearchText',
      ordering_key: 'getOrderingKey',
      ordering_direction: 'getOrderingDirection',
    }),
  },
  methods: {
    ...companiesHelper.mapActions([
      'filterCompanies',
      'setSearchText',
      'setOrderingKey',
      'setOrderingDirection',
      'requestDataOverview',
      'requestDeleteData',
      'requestRemoveConsent',
      'requestUpdateInfo',
    ]),
  },
  created() {
    this.filterCompanies();
  },
};
</script>

<style scoped>
img {
  max-width: 200px;
}
.action-holder {
  flex-direction: column;
  align-items: flex-end;
}
.button-holder {
  text-align: right;
}
</style>
