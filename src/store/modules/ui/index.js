import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const state = {
  menu_visible: false,
  dialogs: {
    consent: false,
    privacy_policy: false,
  },
  authentication: {
    jwt: localStorage.getItem('t'),
    endpoints: {
      obtainJWT: process.env.JWT_OBTAIN,
      refreshJWT: process.env.JWT_REFRESH,
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
