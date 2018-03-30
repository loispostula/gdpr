import types from './types';

const toggleMenu = ({ commit }) => {
  commit(types.TOGGLE_MENU);
};

export default {
  toggleMenu,
};
