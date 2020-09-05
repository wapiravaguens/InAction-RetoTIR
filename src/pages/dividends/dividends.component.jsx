import React from 'react';
import './dividends.styles.scss';

// Components
import DividendsTable from '../../components/dividends-table/dividends-table.component';

import { dividendos } from '../../data/dividendos';

const Dividends = () => {
	return (
		<div className='container-md'>
			<div className='row justify-content-center'>
				<h2>Dividendos</h2>
			</div>

			<div className='row justify-content-center'>
				<DividendsTable dividends={dividendos}/>
			</div>
		</div>
	)
}

export default Dividends;