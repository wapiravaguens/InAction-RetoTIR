import React from 'react';
import './dividends-table.styles.scss';

const DividendsTable = ({ dividends }) => {
	return (
		<table className="table">
			<thead className="thead-dark">
				<tr>
					<th scope="col">#</th>
					<th scope="col">Fecha</th>
					<th scope="col">Valor</th>
				</tr>
			</thead>
			<tbody>
				{
					dividends.map((dividend, index) => (
						<tr key={index}>
							<th scope="row">{index + 1}</th>
							<td>{dividend.Fecha}</td>
							<td>{dividend.Valor}</td>
						</tr>
					))
				}
			</tbody>
		</table>	
	)
}

export default DividendsTable;