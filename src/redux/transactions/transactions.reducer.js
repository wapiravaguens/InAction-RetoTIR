import { TransactionActionTypes } from './transactions.types';
import { addTransaction, removeTransaction } from './transactions.util';

import { transactions } from '../../data/transactions';

const INITIAL_STATE = {
	transactions: transactions,
}

const transactionsReducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case TransactionActionTypes.ADD_TRANSACTION:
			return {
				...state,
				transactions: addTransaction(state.transactions, action.payload)
			};
		case TransactionActionTypes.REMOVE_TRANSACTION:
			return {
				...state,
				transactions: removeTransaction(state.transactions, action.payload)
			}
		default:
			return state;
	}
}

export default transactionsReducer;