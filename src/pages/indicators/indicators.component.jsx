import React from 'react';
import './indicators.styles.scss';

import IndicatorsTable from '../../components/indicators-table/indicators-table.component';

import { indicators } from '../../data/indicators';

const Indicators = () => {
	return (
		<div className='container-sm'>

			<div className='row justify-content-sm-center'>
				<h2>Indicadores</h2>
			</div>

			<div className='row justify-content-sm-center'>
				<IndicatorsTable indicators={indicators}/>
			</div>

		</div>
	)
}

export default Indicators;