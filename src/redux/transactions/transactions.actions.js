import { TransactionActionTypes } from './transactions.types';

export const AddTransaction = transaction => ({
	type: TransactionActionTypes.ADD_TRANSATION,
	payload: transaction
});

export const RemoveTransaction = id => ({
	type: TransactionActionTypes.REMOVE_TRANSATION,
	payload: id
});