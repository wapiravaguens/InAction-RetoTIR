import React from 'react';
import './sidebar.styles.scss';

import { connect } from 'react-redux';

// Components
import SidebarLink from '../sidebar-link/sidebar-link.components';

const Sidebar = ({ hidden }) => {
	return (
		<div className={`sidebar ${hidden ? 'sidebar--hidden' : ''}`} >

			<div className='sidebar__title'>
				<h1>Reto TIR</h1>
			</div>

			<nav>
        <ul>
					<li><SidebarLink to='/' text='Calcular' icon='calculator'/></li>
					<li><SidebarLink to='/dividends' text='Dividendos' icon='albums'/></li>
					<li><SidebarLink to='/indicators' text='Indicadores' icon='analytics'/></li>
    		</ul>
      </nav>

		</div>
	)
}

const mapStateToProps = ({ sidebar }) => ({
	hidden: sidebar.hidden,
});

export default connect(mapStateToProps)(Sidebar);