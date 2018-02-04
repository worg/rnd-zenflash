import * as API from '../utils/api';
import { HYDRATE } from './types';

export const hydrate = dispatch => {
  API.listDecks().then(result => dispatch(
    performHydrate(result)
  ));
};

export const performHydrate = (state) => ({
  type: HYDRATE,
  state,
});
