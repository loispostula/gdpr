import types from './types';
import getters from './getters';

const toLower = str => str.toString().toLowerCase();

const filterCompanies = ({ commit, state }) => {
  const companies = getters.getAllCompaniesAsList(state);
  // first we filter
  const searchText = getters.getSearchText(state);
  const cands = [];
  for (const company of companies) {
    for (const key of ['name']) {
      if (toLower(company[key]).includes(toLower(searchText))) {
        cands.push(company);
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
  commit(types.FILTER_COMPANIES, cands.map(c => c.id));
};

const setSearchText = ({ commit, dispatch, state }, payload) => {
  const searchText = getters.getSearchText(state);
  if (searchText === payload) return;
  commit(types.SET_SEARCH_TEXT, payload);
  dispatch('filterCompanies');
};

const setOrderingKey = ({ commit, dispatch, state }, payload) => {
  const orderingKey = getters.getOrderingKey(state);
  if (orderingKey === payload) return;
  commit(types.SET_ORDERING_KEY, payload);
  dispatch('filterCompanies');
};

const setOrderingDirection = ({ commit, dispatch, state }, payload) => {
  const orderingDirection = getters.getOrderingDirection(state);
  if (orderingDirection === payload) return;
  commit(types.SET_ORDERING_DIRECTION, payload);
  dispatch('filterCompanies');
};

const requestDataOverview = ({ commit, dispatch }, payload) => {
  commit(types.REQUEST_DATA_OVERVIEW, payload);
  dispatch(
    'requests/makeRequest',
    { company: payload, request: 'data_overview' },
    { root: true },
  );
};

const requestDeleteData = ({ commit, dispatch }, payload) => {
  commit(types.REQUEST_DELETE_DATA, payload);
  dispatch(
    'requests/makeRequest',
    { company: payload, request: 'delete_data' },
    { root: true },
  );
};

const requestRemoveConsent = ({ commit, dispatch }, payload) => {
  commit(types.REQUEST_REMOVE_CONSENT, payload);
  dispatch(
    'requests/makeRequest',
    { company: payload, request: 'remove_consent' },
    { root: true },
  );
};

const requestUpdateInfo = ({ commit, dispatch }, payload) => {
  commit(types.REQUEST_UPDATE, payload);
  dispatch(
    'requests/makeRequest',
    { company: payload, request: 'update_info' },
    { root: true },
  );
};

export default {
  setSearchText,
  filterCompanies,
  setOrderingKey,
  setOrderingDirection,
  requestDataOverview,
  requestDeleteData,
  requestRemoveConsent,
  requestUpdateInfo,
};
