import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const state = {
  menu_visible: false,
  dialogs: {
    consent: false,
    privacy_policy: false,
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
