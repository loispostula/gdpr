import types from './types';

export default {
  [types.SET_SEARCH_TEXT](state, payload) {
    state.table_control.search_text = payload;
  },
  [types.FILTER_REQUESTS](state, payload) {
    state.table_control.sorted_filtered_ids = payload;
  },
  [types.SET_ORDERING_KEY](state, payload) {
    state.table_control.ordering_key = payload;
  },
  [types.SET_ORDERING_DIRECTION](state, payload) {
    state.table_control.ordering_direction = payload;
  },
};
