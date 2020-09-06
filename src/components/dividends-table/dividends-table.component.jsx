import React from 'react';
import './dividends-table.styles.scss';

const DividendsTable = ({ dividends }) => {
	return (
		<table className="table">
			<thead className="thead-dark">
				<tr>
					<th scope="col">Fecha</th>
					<th scope="col">Valor</th>
				</tr>
			</thead>
			<tbody>
				{
					dividends.map((dividend, index) => (
						<tr key={index}>
							<td>{dividend.date}</td>
							<td>{dividend.value.toFixed(2)}</td>
						</tr>
					))
				}
			</tbody>
		</table>	
	)
}

export default DividendsTable;