import { configureStore } from '@reduxjs/toolkit';
import participantReducer from '../features/participant/participantSlice';
import searchReducer from '../features/search/searchSlice';

export const store = configureStore({
  reducer: {
    participant: participantReducer,
    search: searchReducer,
  },
});
