import types from './types';

export default {
  [types.INC_COUNTER](state) {
    state.value += 1;
  },
  [types.DEC_COUNTER](state) {
    state.value -= 1;
  },
};
