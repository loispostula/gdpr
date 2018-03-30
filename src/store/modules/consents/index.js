import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const state = {
  validating: null,
  consents: {
    logging: {
      given: true,
      key: 'logging',
      title: 'Logging',
      description: 'Our servers log all incoming requests. We use this information to detect and resolve system errors.',
    },
    authentication: {
      given: false,
      key: 'authentication',
      title: 'Authentication',
      description: 'In order to use our service, we need your full name and your email address.',
    },
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
