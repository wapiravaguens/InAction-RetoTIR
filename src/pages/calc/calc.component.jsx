import React from 'react';
import './calc.styles.scss';

import { connect } from 'react-redux'

// Components
import CalcInput from '../../components/calc-input/calc-input.component';
import CalcTransitionInput from '../../components/calc-transaction-input/calc-transaction-input.component';
import TransactionsTable from '../../components/transactions-table/transactions-table.component';

import { RemoveTransaction } from '../../redux/transactions/transactions.actions';

const Calc = ({ transactions, removeTransaction }) => {
	return (
		<div className='calc container-sm'>
			<div className='row justify-content-sm-center'>
				<CalcInput transactions={transactions} />
			</div>
			<div className='row justify-content-sm-center'>
				<CalcTransitionInput />
			</div>
			<div className='row justify-content-sm-center'>
				<TransactionsTable transactions={transactions}	handleRemove={removeTransaction}/>
			</div>
		</div>
		
	)
}

const mapStateToProps = ({ transactions }) => ({
	transactions: transactions.transactions
});

const mapDispatchToProps = dispatch => ({
	removeTransaction: id => dispatch(RemoveTransaction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Calc);