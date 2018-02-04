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

export const addQuestion = (id, question, answer) => dispatch => {
  return API.addQuestion(id, question, answer).then(q => dispatch(
    createQuestion(q)
  ));
};
