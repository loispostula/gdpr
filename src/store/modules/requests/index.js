import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const state = {
  data: {
    1: {
      id: 1,
      request: 'delete',
      company: 'brol machin',
      status: 'requested',
    },
    2: {
      id: 2,
      request: 'retrieve',
      company: 'brol machin',
      status: 'done',
    },
  },
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
