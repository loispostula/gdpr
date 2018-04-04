import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const state = {
  data: {},
  table_control: {
    search_text: '',
    ordering_key: 'status',
    ordering_direction: 'asc',
    sorted_filtered_ids: [],
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
