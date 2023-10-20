import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import todoReducer from '../reducers/todoSlice';
import persistedReducer from '../utils/persistConfig';

const rootReducer = combineReducers({
  todos: todoReducer,
  // We only need one reducer at the moment
});


// Add middleware 
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
    // No need for more middlewares but in case we can add more here
  ],
});

// Export a useDispatch and useSelector typed
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// this is necesariy to persist it. 
const persistor = persistStore(store);

export { store, persistor };
