import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import middleware from './middleware';

import rootReducer from './reducers';

const persistConfig = {
	key: 'root',
	storage,
	blacklist: [ 'loadingBar' ] // only loadingBar will not be persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => {
	let store = createStore(persistedReducer, middleware);
	let persistor = persistStore(store);
	return { store, persistor };
};

export default configureStore;
