import types from './types';
import getters from './getters';

const toLower = str => str.toString().toLowerCase();

const filterRequests = ({ commit, state }) => {
  const requests = getters.getAllRequestsAsList(state);
  // first we filter
  const searchText = getters.getSearchText(state);
  const cands = [];
  for (const request of requests) {
    for (const key of ['company', 'status', 'request']) {
      if (toLower(request[key]).includes(toLower(searchText))) {
        cands.push(request);
        break;
      }
    }
  }
  const orderingKey = getters.getOrderingKey(state);
  const orderingDirection = getters.getOrderingDirection(state);
  cands.sort((a, b) => {
    const sa = toLower(a[orderingKey]);
    const sb = toLower(b[orderingKey]);
    return (-(sa < sb) || +(sa !== sb)) * (orderingDirection === 'asc' ? 1 : -1);
  });
  // then we sort
  commit(types.FILTER_REQUESTS, cands.map(c => c.id));
};

const setSearchText = ({ commit, dispatch, state }, payload) => {
  const searchText = getters.getSearchText(state);
  if (searchText === payload) return;
  commit(types.SET_SEARCH_TEXT, payload);
  dispatch('filterRequests');
};

const setOrderingKey = ({ commit, dispatch, state }, payload) => {
  const orderingKey = getters.getOrderingKey(state);
  if (orderingKey === payload) return;
  commit(types.SET_ORDERING_KEY, payload);
  dispatch('filterRequests');
};

const setOrderingDirection = ({ commit, dispatch, state }, payload) => {
  const orderingDirection = getters.getOrderingDirection(state);
  if (orderingDirection === payload) return;
  commit(types.SET_ORDERING_DIRECTION, payload);
  dispatch('filterRequests');
};

export default {
  setSearchText,
  filterRequests,
  setOrderingKey,
  setOrderingDirection,
};
