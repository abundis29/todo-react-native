import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { persistReducer } from 'redux-persist';
import { RootState } from '../store/store';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['todos'], // Specify which reducers to persist
    stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, (state: RootState) => state);

export default persistedReducer;
