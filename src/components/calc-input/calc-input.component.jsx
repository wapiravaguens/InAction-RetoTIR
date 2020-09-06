import React, { useState } from 'react';
import './calc-input.styles.scss';

// Data
import { dividends } from '../../data/dividends';
import { indicators } from '../../data/indicators';

// ExcelFormulas
import ExcelFormulas from './ExcelFormulas';

const CalcInput = ({ transactions }) => {
	const [TIR, setTIR] = useState(0);
	const [queryDate, setQueryDate] = useState('');

	const onSubmit = event => {
		event.preventDefault();
		
		// Calculate the arrays of transactions and dividends in the range of the query
		const [inRangeTransactions, inRangeDividends] = calcInRangeTransactionsAndDividends(transactions, dividends, queryDate);

		// Calculate the arrays of dates and values of the transactions and dividends
		const indicator = indicators.find(v => v.date === queryDate).value;
		const [values, dates] = calcDatesAndValues(inRangeTransactions, inRangeDividends, indicator, queryDate);

		// Calculate XIRR
		let xirr_values = {};
		for (let i = 0; i < values.length; i++) {
			xirr_values[i] = { Flow: values[i], Date: new Date(dates[i]) } ;
		}
		setTIR( ExcelFormulas.XIRR(xirr_values, false) * 100 );
	}

	return (
		<div className='calc-input'>
			<form className="calc-input__form" onSubmit={onSubmit}>

				<div className="calc_input__date">
					<label htmlFor="inputDate">Fecha de Consulta</label>
					<input 
						min={new Date(Math.min.apply(null, indicators.map(v => new Date(v.date)))).toISOString().substring(0, 10)} 
						max={new Date(Math.max.apply(null, indicators.map(v => new Date(v.date)))).toISOString().substring(0, 10)} 
						value={queryDate} 
						onChange={e => setQueryDate(e.target.value)} 
						type="date" 
						className="form-control" 
						id="inputDate" 	
						required
					/>
				</div>

				<button type="submit" className="btn btn-primary">Calcular</button>

				<div className='calc-input__TIR'> 
					<h3>
						TIR =   
						<span className={`calc-input__TIR-value ${TIR > 0 ? 'positive' : (TIR < 0 ? 'negative' : '')}`}>
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

	const inRangeTransactions = transactions.filter(ele => inRangeFilter(ele.date, dateFirstTransaction, queryDate));
	const inRangeDividends = dividends.filter(ele => inRangeFilter(ele.date, dateFirstTransaction,  queryDate));

	return [inRangeTransactions, inRangeDividends];
}

function inRangeFilter(element, dateFirstTransaction, queryDate) {
	if (element >= dateFirstTransaction && element< queryDate)return true;
	return false;
}

function calcDatesAndValues(transactions, dividends, indicator, queryDate) {
	const compartorDates = (a, b) => (new Date(a.date) - new Date(b.date));
	transactions.sort(compartorDates);
	dividends.sort(compartorDates);

	const dates = [];
	const values = [];
	let totalShares = 0;
	let flag = true;
	for (let i = 0, j = 0; i + j < dividends.length + transactions.length;) {
		if (i < transactions.length && j < dividends.length) {
			flag = transactions[i].date < dividends[j].date;
		} else if (i < transactions.length) {
			flag = true;
		} else {
			flag = false;
		}
		
		if (flag) {
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

	// Add the date and value of the query date
	dates.push(queryDate);
	values.push(indicator * totalShares * -1);

	return [values, dates];
}

export default CalcInput;