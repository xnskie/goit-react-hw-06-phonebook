import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

import persistedReducer from './root-reducer';
import {filterReducer} from "./filter/filter-slice";


export const store = configureStore({
    reducer: {
        contacts: persistedReducer,
        filter: filterReducer,
    } 
})

export const persistor = persistStore(store)