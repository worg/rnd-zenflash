import * as API from '../utils/api';
import { HYDRATE } from './types';

export const hydrate = dispatch => {
  API.listDecks().then(state => {
    dispatch(performHydrate(state));
  });
};

export const performHydrate = (state) => ({
  type: HYDRATE,
  state,
});
