import React from 'react';
import './calc-transation-input.styles.scss';

const CalcTransitionInput = () => {
	return (
		<div className='calc-transation-input'>
			<form className="calc-transation-input__form">

				<div className="container-md">
					<div className='row justify-content-center'>
						<div className='col-md-3'>
							<div className="form-group">
								<label htmlFor="type">Tipo</label>
								<select className="form-control" id="type" >
									<option>Inversión</option>
									<option>Retiro</option>
								</select>
							</div>
						</div>

						<div className='col-md-3'>
							<div className="form-group">
								<label htmlFor="inputDate">Fecha</label>
								<input type="date" className="form-control" id="inputDate" />
							</div>
						</div>
					</div>

					<div className='row justify-content-center'>
						<div className='col-md-3'>				
							<div className="form-group">
								<label htmlFor="actions">Acciones</label>
								<input type="number" className="form-control" id="actions"/>
							</div>
						</div>

						<div className='col-md-3'>
						<div className="form-group">
							<label htmlFor="value">Valor</label>
							<input type="number" className="form-control" id="value"/>
						</div>
						</div>
					</div>

					<div className='row row justify-content-center'>
						<button type="button" className="btn btn-primary btn-lg">Agregar</button>
					</div>

				</div>

			</form>
		</div>
	)
}

export default CalcTransitionInput;