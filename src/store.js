import {autoRehydrate, persistStore} from 'redux-persist'
import {applyMiddleware, compose, createStore} from "redux";
import reduxThunk from "redux-thunk"
import {AsyncStorage} from 'react-native'

import appReducer from './reducers'
import {logger} from "redux-logger";

export const configureStore = () => {
    // create global store using Redux
    const appStore = createStore(
        appReducer,
        undefined,
        compose(
            autoRehydrate({log: false}),
            applyMiddleware(reduxThunk, logger),
        )
    );
    // persistStore(appStore, {storage: AsyncStorage});
    return appStore
}
