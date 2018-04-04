const getAllCompanies = state => state.data;

const getAllCompaniesAsList = (state) => {
  const companies = getAllCompanies(state);
  return Object.keys(companies).map(id => companies[id]);
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

const getSortedFilteredCompanies = (state) => {
  const companies = getAllCompanies(state);
  const ids = getSortedFilteredIds(state);
  return ids.map(id => companies[id]);
};

export default {
  getAllCompanies,
  getAllCompaniesAsList,
  getTableControls,
  getSearchText,
  getOrderingKey,
  getOrderingDirection,
  getSortedFilteredIds,
  getSortedFilteredCompanies,
};
