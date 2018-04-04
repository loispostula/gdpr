import types from './types';

export default {
  [types.SET_SEARCH_TEXT](state, payload) {
    state.table_control.search_text = payload;
  },
  [types.FILTER_COMPANIES](state, payload) {
    state.table_control.sorted_filtered_ids = payload;
  },
  [types.SET_ORDERING_KEY](state, payload) {
    state.table_control.ordering_key = payload;
  },
  [types.SET_ORDERING_DIRECTION](state, payload) {
    state.table_control.ordering_direction = payload;
  },
  [types.REQUEST_DATA_OVERVIEW](state, payload) {
    state.data[payload.id].request_sent += 1;
  },
  [types.REQUEST_DELETE_DATA](state, payload) {
    state.data[payload.id].request_sent += 1;
  },
  [types.REQUEST_REMOVE_CONSENT](state, payload) {
    state.data[payload.id].request_sent += 1;
  },
  [types.REQUEST_UPDATE](state, payload) {
    state.data[payload.id].request_sent += 1;
  },
};
