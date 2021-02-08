import reduceReducers from 'reduce-reducers';
import mainPageReducer, { mainPageInitialState } from './mainPageReducer';

const initialState = {
  mainPage: mainPageInitialState,
};

const reducer = reduceReducers(initialState, mainPageReducer);

export default reducer;
