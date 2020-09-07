import React from 'react';
import './calc.styles.scss';

import { connect } from 'react-redux'

import { RemoveTransaction } from '../../redux/transactions/transactions.actions';

// Components
import CalcTir from '../../components/calc-tir/calc-tir.component';
import NewTransaction from '../../components/new-transaction/new-transaction.component';
import TransactionsTable from '../../components/transactions-table/transactions-table.component';


const Calc = ({ transactions, removeTransaction }) => {
	return (
		<div className='calc container-sm'>
			<div className='row justify-content-sm-center'>
				<CalcTir transactions={transactions} />
			</div>
			<div className='row justify-content-sm-center'>
				<NewTransaction />
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