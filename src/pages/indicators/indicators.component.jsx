import React from 'react';
import './indicators.styles.scss';

// Components
import IndicatorsTable from '../../components/indicators-table/indicators-table.component';

import { indicadores } from '../../data/indicadores';

const Indicators = () => {
	return (
		<div className='container-sm'>

			<div className='row justify-content-sm-center'>
				<h2>Indicadores</h2>
			</div>

			<div className='row justify-content-sm-center'>
				<IndicatorsTable indicators={indicadores}/>
			</div>

		</div>
	)
}

export default Indicators;