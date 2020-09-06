import React from 'react';
import './dividends.styles.scss';

// Components
import DividendsTable from '../../components/dividends-table/dividends-table.component';

import { dividends } from '../../data/dividends';

const Dividends = () => {
	return (
		<div className='container-sm'>
			<div className='row justify-content-sm-center'>
				<h2>Dividendos</h2>
			</div>

			<div className='row justify-content-sm-center'>
				<DividendsTable dividends={dividends}/>
			</div>
		</div>
	)
}

export default Dividends;