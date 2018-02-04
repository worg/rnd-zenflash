import * as API from '../utils/api';
import {
  HYDRATE,
  ADD_DECK,
  ADD_QUESTION,
} from './types';

export const hydrate = dispatch => {
  API.listDecks().then(result => dispatch(
    performHydrate(result)
  ));
};

export const performHydrate = state => ({
  type: HYDRATE,
  state,
});

const createDeck = deck => ({
  type: ADD_DECK,
  deck,
});

export const addDeck = title => dispatch => {
  return API.addDeck(title).then(deck => dispatch(
    createDeck(deck)
  ));
};

const createQuestion = question => ({
  type: ADD_QUESTION,
  question,
});

export const addQuestion = (id, question, answer) => (dispatch, getState) => {
  const paramQuestion = { question, answer };
  const state = getState();
  const newQuestions = state[id].questions.concat(paramQuestion);
  return API.addQuestion(id, newQuestions).then(() => dispatch(
    createQuestion({id, ...paramQuestion})
  ));
};
