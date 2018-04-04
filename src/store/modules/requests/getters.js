const getAllRequests = state => state.data;

const getAllRequestsAsList = (state, getters) => {
  const requests = getters.getAllRequests;
  return Object.keys(requests).map(id => requests[id]);
};

const getTableControls = state => state.table_control;

const getSearchText = (state, getters) => {
  const controls = getters.getTableControls;
  return controls.search_text;
};

const getOrderingKey = (state, getters) => {
  const controls = getters.getTableControls;
  return controls.ordering_key;
};

const getOrderingDirection = (state, getters) => {
  const controls = getters.getTableControls;
  return controls.ordering_direction;
};

const getSortedFilteredIds = (state, getters) => {
  const controls = getters.getTableControls;
  return controls.sorted_filtered_ids;
};

const getSortedFilteredRequests = (state, getters) => {
  const requests = getters.getAllRequests;
  const ids = getters.getSortedFilteredIds;
  return ids.map(id => requests[id]);
};

export default {
  getAllRequests,
  getAllRequestsAsList,
  getTableControls,
  getSearchText,
  getOrderingKey,
  getOrderingDirection,
  getSortedFilteredIds,
  getSortedFilteredRequests,
};
