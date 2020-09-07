import React from 'react';
import './sidebar-button.styles.scss';

import { connect } from 'react-redux';

import { toggleSidebar } from '../../redux/sidebar/sidebar.actions' ;

const SidebarButton = ({ toggleSidebar }) => {
	return (
		<button onClick={() => toggleSidebar()} className='sidebar-button'>
			<ion-icon name="menu"></ion-icon>
		</button>
	)
}

const mapDispatchToProps = dispatch => ({
	toggleSidebar: hidden => dispatch(toggleSidebar(hidden)),
})

export default connect(null, mapDispatchToProps)(SidebarButton);