import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import ui from './modules/ui';
import consents from './modules/consents';
import requests from './modules/requests';
import companies from './modules/companies';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const logger = createLogger();

// one store for entire application
export default new Vuex.Store({
  modules: {
    ui,
    consents,
    requests,
    companies,
  },
  strict: debug,
  plugins: [logger],
});
