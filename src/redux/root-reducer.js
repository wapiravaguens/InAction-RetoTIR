import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';

import sidebarReducer from './sidebar/sidebar.reducers';
import transactionsReducer from './transactions/transactions.reducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['sidebar', 'transactions'],
};

const rootReducer = combineReducers({
	sidebar: sidebarReducer,
	transactions: transactionsReducer,
});

export default persistReducer(persistConfig, rootReducer);