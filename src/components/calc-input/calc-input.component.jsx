import React from 'react';
import './calc-input.styles.scss';

const CalcInput = () => {
	return (
		<div className='calc-input'>
			<form className="calc-input__form">

				<div className="calc_input__date">
					<label htmlFor="inputDate">Fecha</label>
					<input type="date" className="form-control" id="inputDate" />
				</div>

				<button type="submit" className="btn btn-primary">Calcular</button>

				<div className='calc-input__TIR'> 
					<h3>TIR = <span>6.97 %</span></h3>
				</div>

			</form>
		</div>
	)
}

export default CalcInput;