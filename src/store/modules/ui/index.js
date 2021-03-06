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
  },
  snackbar: {
    queued: [],
    message: null,
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
