import { AsyncStorage } from 'react-native';
import { DECKS_STORAGE_KEY } from './constants';
import sampleData from './sampledata';

export const listDecks = () => {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
          .then(JSON.parse)
          .then(decks => decks || sampleData);
};
