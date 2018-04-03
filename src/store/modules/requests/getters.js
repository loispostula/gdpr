const getAllRequests = state => state.data;

const getAllRequestsAsList = (state) => {
  const requests = getAllRequests(state);
  return Object.keys(requests).map(id => requests[id]);
};

const getTableControls = state => state.table_control;

const getSearchText = (state) => {
  const controls = getTableControls(state);
  return controls.search_text;
};

const getOrderingKey = (state) => {
  const controls = getTableControls(state);
  return controls.ordering_key;
};

const getOrderingDirection = (state) => {
  const controls = getTableControls(state);
  return controls.ordering_direction;
};

const getSortedFilteredIds = (state) => {
  const controls = getTableControls(state);
  return controls.sorted_filtered_ids;
};

const getSortedFilteredRequests = (state) => {
  const requests = getAllRequests(state);
  const ids = getSortedFilteredIds(state);
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
