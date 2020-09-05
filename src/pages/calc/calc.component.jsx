import React from 'react';
import './calc.styles.scss';

// Components
import CalcInput from '../../components/calc-input/calc-input.component';
import CalcTransitionInput from '../../components/calc-transation-input/calc-transation-input.component';
import TransationsTable from '../../components/transations-table/transations-table.component';

import { transations } from '../../data/transations';

const Calc = () => {
	return (
		<div className='calc container-sm'>
			<div className='row justify-content-sm-center'>
				<CalcInput />
			</div>
			<div className='row justify-content-sm-center'>
				<CalcTransitionInput />
			</div>
			<div className='row justify-content-sm-center'>
				<TransationsTable transations={transations}	/>
			</div>
		</div>
		
	)
}

export default Calc;