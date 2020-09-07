import React, { useState } from 'react';
import './new-transaction.styles.scss';

import { connect } from 'react-redux';

import { AddTransaction } from '../../redux/transactions/transactions.actions';


const NewTransaction = ({ addTransaction }) => {
	const [type, setType] = useState('1');
	const [date, setDate] = useState('');
	const [shares, setShares] = useState('');
	const [value, setValue] = useState('');

	const onSubmit = event => {
		event.preventDefault();
		addTransaction({
			type: parseInt(type),
			date: date,
			shares: parseFloat(type === '1' ? shares : -shares),
			value: parseFloat(value)
		});
	}
	
	return (
		<div className='new-transaction'>
			<form className="new-transaction__form" onSubmit={onSubmit}>

				<div className="container-md">
				
					<div className='row justify-content-center'>
						<h2>Agregar Transacción</h2>
					</div>

					<div className='row justify-content-center'>
						<div className='col-md-3'>
							<div className="form-group">
								<label htmlFor="type">Tipo</label>
								
								<select value={type} onChange={e => setType(e.target.value)} className="form-control" id="type" required>
									<option value={'1'}>Inversión</option>
									<option value={'0'}>Retiro</option>
								</select>

							</div>
						</div>

						<div className='col-md-3'>
							<div className="form-group">
								<label htmlFor="inputDate">Fecha</label>

								<input value={date} onChange={e => setDate(e.target.value)} type="date" className="form-control" id="inputDate" required/>
							
							</div>
						</div>
					</div>


					<div className='row justify-content-center'>
						<div className='col-md-3'>				
							<div className="form-group">
								<label htmlFor="actions">Acciones</label>
							
								<input value={shares} onChange={e => setShares(e.target.value)} type="number" min={0} className="form-control" id="actions" required/>

							</div>
						</div>

						<div className='col-md-3'>
							<div className="form-group">
								<label htmlFor="value">Valor</label>
								
								<input value={value} onChange={e => setValue(e.target.value)} type="number" className="form-control" id="value" required/>
							
							</div>
						</div>
					</div>


					<div className='row row justify-content-center'>
						<button type="submit" className="btn btn-primary btn-lg">Agregar</button>
					</div>
				</div>

			</form>
		</div>
	)
}


const mapDispatchToProps = dispatch => ({
	addTransaction : transaction => (dispatch(AddTransaction(transaction))),
});

export default connect(null, mapDispatchToProps)(NewTransaction);