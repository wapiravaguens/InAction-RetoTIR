import React, { useState } from 'react';
import './calc-tir.styles.scss';

// Data
import { dividends } from '../../data/dividends';
import { indicators } from '../../data/indicators';

// ExcelFormulas
import ExcelFormulas from './ExcelFormulas';


const CalcTir = ({ transactions }) => {
	const [TIR, setTIR] = useState(0);
	const [queryDate, setQueryDate] = useState('');


	const onSubmit = event => {
		event.preventDefault();
		
		// Calculate the arrays of transactions and dividends in the range of the query date
		const [inRangeTransactions, inRangeDividends] = calcInRangeTransactionsAndDividends(transactions, dividends, queryDate);

		// Calculate the arrays of dates and values from the transactions and dividends
		const indicator = indicators.find(v => v.date === queryDate).value;
		const [dates, values] = calcDatesAndValues(inRangeTransactions, inRangeDividends, indicator, queryDate);

		// Calculate XIRR
		let xirr_values = {};
		for (let i = 0; i < values.length; i++) {
			xirr_values[i] = { Flow: values[i], Date: new Date(dates[i]) } ;
		}
		setTIR( ExcelFormulas.XIRR(xirr_values, false) * 100 );
	}


	return (
		<div className='calc-tir'>
			<form className="calc-tir__form" onSubmit={onSubmit}>

				<div className="calc_input__date">
					<label htmlFor="inputDate">Fecha de Consulta</label>
					<input 
						min={'2016-03-01'} 
						max={'2020-05-06'} 
						value={queryDate} 
						onChange={e => setQueryDate(e.target.value)} 
						type="date" 
						className="form-control" 
						id="inputDate" 	
						required
					/>
				</div>

				<button type="submit" className="btn btn-primary">Calcular</button>

				<div className='calc-tir__text'> 
					<h3>
						TIR =   
						<span className={`calc-tir__text-value ${TIR > 0 ? 'positive' : (TIR < 0 ? 'negative' : '')}`}>
							{TIR.toFixed(2)}%
						</span>
					</h3>
				</div>

			</form>
		</div>
	)
}


function calcInRangeTransactionsAndDividends(transactions, dividends, queryDate) {
	let dateFirstTransaction = Math.min.apply( null, transactions.map(v => new Date(v.date)) );
	dateFirstTransaction = new Date(dateFirstTransaction).toISOString().substring(0, 10);

	const inRangeTransactions = transactions.filter(element => inRangeFilter(element.date, dateFirstTransaction, queryDate));
	const inRangeDividends = dividends.filter(element => inRangeFilter(element.date, dateFirstTransaction,  queryDate));

	return [inRangeTransactions, inRangeDividends];
}

function inRangeFilter(element, dateFirstTransaction, queryDate) {
	if (element >= dateFirstTransaction && element< queryDate) return true;
	return false;
}

function calcDatesAndValues(transactions, dividends, indicator, queryDate) {
	const datesComparator = (a, b) => (new Date(a.date) - new Date(b.date));
	transactions.sort(datesComparator);
	dividends.sort(datesComparator);

	const dates = [];
	const values = [];
	let totalShares = 0;
	let nextIsTransaction = true;
	for (let i = 0, j = 0; i + j < dividends.length + transactions.length; ) {
		if (i < transactions.length && j < dividends.length) {
			nextIsTransaction = transactions[i].date < dividends[j].date;
		} else if (i < transactions.length) {
			nextIsTransaction = true;
		} else {
			nextIsTransaction = false;
		}
		
		if (nextIsTransaction) {
			dates.push(transactions[i].date);
			values.push(transactions[i].value * transactions[i].shares);
			totalShares += transactions[i].shares;
			i++;
		} else {
			dates.push(dividends[j].date);
			values.push(-1 * dividends[j].value * totalShares);
			j++;
		}
	}

	// Add the date and value from the query date 
	dates.push(queryDate);
	values.push(indicator * totalShares * -1);

	return [dates, values];
}

export default CalcTir;