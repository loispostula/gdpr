import types from './types';

const incCounter = ({ commit }) => {
  commit(types.INC_COUNTER);
};

const decCounter = ({ state, commit }) => {
  if (state.value > 0) {
    commit(types.DEC_COUNTER);
  }
};

export default {
  incCounter,
  decCounter,
};
