import { createStore, combineReducers } from 'redux';
import initialState from './initialState.js';
import postsReducer from './postsReducer';
import categoriesReducer from './categoriesReducer.js';

const subreducers = {
  posts:postsReducer, 
  categories:categoriesReducer,
}

const reducer = combineReducers(subreducers);
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;