import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import createSagaMiddleWare from 'redux-saga';
import {watcherSaga} from './sagas/rootSaga';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import rootReducer from './rootReducer';

const sagaMiddleware = createSagaMiddleWare();

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    //will not be persisted
    blacklist: [],
    //will be persisted
    //나중에 'user'넣어서 앱 재실행해도 기존값 가져오게
    whitelist: ['setting'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: [
        ...getDefaultMiddleware({thunk: false, serializableCheck: false}),
        sagaMiddleware,
    ],
    devTools: true,
});
sagaMiddleware.run(watcherSaga);

export const persistor = persistStore(store);
export default store;
