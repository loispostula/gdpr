import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import counter from './modules/counter';
import ui from './modules/ui';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const logger = createLogger();

// one store for entire application
export default new Vuex.Store({
  modules: {
    counter,
    ui,
  },
  strict: debug,
  plugins: [logger],
});
