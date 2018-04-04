import types from './types';

const toLower = str => str.toString().toLowerCase();

const filterRequests = ({ commit, getters, rootGetters }) => {
  const requests = getters.getAllRequestsAsList;
  // first we filter
  const searchText = toLower(getters.getSearchText);
  const companies = rootGetters['companies/getAllCompanies'];
  const cands = [];
  for (const request of requests) {
    for (const key of ['status', 'request']) {
      if (toLower(request[key]).includes(searchText)) {
        cands.push(request);
        break;
      }
    }
    const company = companies[request.company];
    if (company) {
      if (toLower(company.name).includes(searchText)) {
        cands.push(request);
      }
    }
  }
  const orderingKey = getters.getOrderingKey;
  const orderingDirection = getters.getOrderingDirection;
  cands.sort((a, b) => {
    const sa = toLower(a[orderingKey]);
    const sb = toLower(b[orderingKey]);
    return (-(sa < sb) || +(sa !== sb)) * (orderingDirection === 'asc' ? 1 : -1);
  });
  // then we sort
  commit(types.FILTER_REQUESTS, cands.map(c => c.id));
};

const setSearchText = ({ commit, dispatch, getters }, payload) => {
  const searchText = getters.getSearchText;
  if (searchText === payload) return;
  commit(types.SET_SEARCH_TEXT, payload);
  dispatch('filterRequests');
};

const setOrderingKey = ({ commit, dispatch, getters }, payload) => {
  const orderingKey = getters.getOrderingKey;
  if (orderingKey === payload) return;
  commit(types.SET_ORDERING_KEY, payload);
  dispatch('filterRequests');
};

const setOrderingDirection = ({ commit, dispatch, getters }, payload) => {
  const orderingDirection = getters.getOrderingDirection;
  if (orderingDirection === payload) return;
  commit(types.SET_ORDERING_DIRECTION, payload);
  dispatch('filterRequests');
};

const makeRequest = ({ commit }, payload) => {
  commit(types.CREATE_REQUEST_COMPLETE, payload);
};

export default {
  setSearchText,
  filterRequests,
  setOrderingKey,
  setOrderingDirection,
  makeRequest,
};
