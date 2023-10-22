import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import todoSlice from "../reducers/todoSlice";

export const rootReducer = combineReducers({
    todos: todoSlice,
    // If you need another reducer, you would add it like so
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['todos'],
    stateReconciler: autoMergeLevel2,
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);

