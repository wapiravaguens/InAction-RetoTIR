export const addTransaction = (transactions, newTransaction) => {
	return  [newTransaction, ...transactions]
}

export const removeTransaction = (transactions, id) => {
	transactions.splice(id, 1);
	return [...transactions];
}