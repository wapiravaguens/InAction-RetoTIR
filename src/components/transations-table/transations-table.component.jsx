import React from 'react';
import './transations-table.styles.scss';

const TransationsTable = ({ transations }) => {
	return (
		<table className="table">
			<thead className="thead-dark">
				<tr>
					<th scope="col">#</th>
					<th scope="col">Tipo</th>
					<th scope="col">Fecha</th>
					<th scope="col">Acciones</th>
					<th scope="col">Valor</th>
				</tr>
			</thead>
			<tbody>
				{
					transations.map((transation, index) => (
						<tr key={index}>
							<th scope="row">{index + 1}</th>
							<td>{transation.Tipo ? 'Inversion' : 'Retiro'}</td>
							<td>{transation.Fecha}</td>
							<td>{transation.Acciones}</td>
							<td>{transation.Valor}</td>
						</tr>
					))
				}
			</tbody>
		</table>	
	)
}

export default TransationsTable;