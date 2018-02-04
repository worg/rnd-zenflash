import {
  HYDRATE,
  LIST_DECKS,
  ADD_DECK,
  ADD_QUESTION,
} from '../actions/types';

const ACTION_HANDLERS = {
  [HYDRATE]: (state, action) => {
    return Object.assign({}, state, action.state);
  },
  [LIST_DECKS]:(state,action) => {

  },
  [ADD_DECK]:(state,action) => {

  },
  [ADD_QUESTION]:(state,action) => {

  },
};

const initialState = {};

export default function mainReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
