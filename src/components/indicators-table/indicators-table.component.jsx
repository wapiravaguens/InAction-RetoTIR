import React from 'react';
import './indicators-table.styles.scss';

const IndicatorsTable = ({ indicators }) => {
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
					indicators.map((indicator, index) => (
						<tr key={index}>
							<th scope="row">{index + 1}</th>
							<td>{indicator.Fecha}</td>
							<td>{indicator.Valor}</td>
						</tr>
					))
				}
			</tbody>
		</table>	
	)
}

export default IndicatorsTable;