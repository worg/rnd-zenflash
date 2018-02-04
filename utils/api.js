import { AsyncStorage } from 'react-native';
import { DECKS_STORAGE_KEY } from './constants';
import sampleData from '../utils/sampledata';

export const listDecks = () => {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
          .then(JSON.parse)
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