import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { wordsApi } from './words.api';
import { appReducer } from './appReducer';

export const store = configureStore({
  reducer: combineReducers({
    [wordsApi.reducerPath]: wordsApi.reducer,
    app: appReducer
  }),
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(wordsApi.middleware);
  }
});
