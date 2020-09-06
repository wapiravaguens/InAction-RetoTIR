import React from 'react';
import './transactions-table.styles.scss';

const TransactionsTable = ({ transactions, handleRemove }) => {
	return (
		<table className="table">
			<thead className="thead-dark">
				<tr>
					<th scope="col">Tipo</th>
					<th scope="col">Fecha</th>
					<th scope="col">Acciones</th>
					<th scope="col">Valor</th>
					<th scope="col">Eliminar</th>
				</tr>
			</thead>
			<tbody>
				{
					transactions.map((transaction, index) => (
						<tr key={index}>
							<td>{transaction.type ? 'Inversión' : 'Retiro'}</td>
							<td>{transaction.date}</td>
							<td>{transaction.shares}</td>
							<td>{transaction.value}</td>
							<td><button onClick={() => handleRemove(index)}type="button" className="btn btn-danger">X</button></td>
						</tr>
					))
				}
			</tbody>
		</table>	
	)
}

export default TransactionsTable;