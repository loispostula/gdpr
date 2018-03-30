import types from './types';

export default {
  [types.TOGGLE_MENU](state) {
    state.menu_visible = !state.menu_visible;
  },
};
