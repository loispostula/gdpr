import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import counter from './modules/counter';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const logger = createLogger();

// one store for entire application
export default new Vuex.Store({
  modules: {
    counter,
  },
  strict: debug,
  plugins: [logger],
});
