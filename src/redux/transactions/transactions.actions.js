import { TransactionActionTypes } from './transactions.types';

export const AddTransaction = transaction => ({
	type: TransactionActionTypes.ADD_TRANSACTION,
	payload: transaction
});

export const RemoveTransaction = id => ({
	type: TransactionActionTypes.REMOVE_TRANSACTION,
	payload: id
});