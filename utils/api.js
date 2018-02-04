import { AsyncStorage } from 'react-native';
import { DECKS_STORAGE_KEY } from './constants';
import sampleData from '../utils/sampledata';
import { v1 } from 'uuid';

// Storage helper
const storage = {
  get(key) {
    return AsyncStorage.getItem(key)
            .then(JSON.parse);
  },
  merge(key, value) {
    return AsyncStorage.mergeItem(key, JSON.stringify(value));
  },
  set(key, value) {
    return AsyncStorage.setItem(key, JSON.stringify(value));
  },
};

export const listDecks = () => {
  return storage.get(DECKS_STORAGE_KEY)
          .then(r => {
            if (r !== null) {
              return r;
            }

            // save sampledata if we don't have any data
            AsyncStorage.setItem(
              DECKS_STORAGE_KEY,
              JSON.stringify(sampleData)
            );
            return sampleData;
          });
};


const createDeck = (title) => {
  const id = v1();
  return {
    [id]: {
      id,
      title,
      questions: [],
    }
  };
};

export const addDeck = (title) => {
  const deck = createDeck(title);
  return storage.merge(DECKS_STORAGE_KEY, deck).then(() => deck);
};

export const addQuestion = (id, questions) => {
  const deck = {
    [id]: { questions },
  };

  return storage.merge(DECKS_STORAGE_KEY, deck).then(() => deck);
};