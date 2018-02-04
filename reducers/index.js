import {
  HYDRATE,
  ADD_DECK,
  ADD_QUESTION,
} from '../actions/types';

const ACTION_HANDLERS = {
  [HYDRATE]: (state, action) => {
    return Object.assign({}, state, action.state);
  },
  [ADD_DECK]:(state, action) => {
    return Object.assign({}, state, action.deck);
  },
  [ADD_QUESTION]:(state, action) => {
    const { id, ...question } = action.question;
    const deck = state[id];
    return Object.assign({}, state, {
      [id]: Object.assign({}, deck, {
        questions: deck.questions.concat(question),
      }),
    });
  },
};

const initialState = {};

export default function mainReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
