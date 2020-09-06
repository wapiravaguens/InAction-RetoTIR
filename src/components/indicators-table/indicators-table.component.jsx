import React from 'react';
import './indicators-table.styles.scss';

const IndicatorsTable = ({ indicators }) => {
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
					indicators.map((indicator, index) => (
						<tr key={index}>
							<td>{indicator.date}</td>
							<td>{indicator.value.toFixed(2)}</td>
						</tr>
					))
				}
			</tbody>
		</table>	
	)
}

export default IndicatorsTable;