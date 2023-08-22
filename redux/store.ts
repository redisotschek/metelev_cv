import {configureStore} from '@reduxjs/toolkit';
import sectionReducer from './reducers/sectionsSlice';

const createStore = (preloadedState) => {
    return configureStore({
        reducer:{
            section: sectionReducer
        },
        preloadedState,
    })
}

let store;

export const initializeStore = (preloadedState) => {
    let _store = store ?? createStore(preloadedState);
    if (preloadedState && store) {
        _store = createStore({
            ...store.getState(),
            ...preloadedState,
        })
        store = undefined;
    }
    if (typeof window === 'undefined') return _store;
    if (!store) store = _store;

    return _store;
}