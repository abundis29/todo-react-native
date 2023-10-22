import { configureStore, Middleware } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { persistStore } from 'redux-persist';
import { Todo } from '../types/Todo';
import { persistedReducer, rootReducer } from '../utils/persistConfig';
import { PersistPartial } from 'redux-persist/es/persistReducer';


export interface AppState {
  todos: Todo[];
}

const middleware: Middleware[] = []; 

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(middleware),
});

// export type RootState = ReturnType<typeof rootReducer>;
export type RootState = ReturnType<typeof rootReducer> & PersistPartial;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const persistor = persistStore(store);

export { store, persistor };
