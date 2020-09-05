import React from 'react';
import './sidebar-button.styles.scss';

// Redux
import { connect } from 'react-redux';

// Actions
import { toggleSidebar } from '../../redux/sidebar/sidebar.actions' ;


const SidebarButton = ({ hidden, toggleSidebar }) => {
	return (
		<button onClick={() => toggleSidebar(!hidden)} className='sidebar-button'>
			<ion-icon name="menu"></ion-icon>
		</button>
	)
}

const mapStateToProps = ({ sidebar }) => ({
	hidden: sidebar.hidden,
});

const mapDispatchToProps = dispatch => ({
	toggleSidebar: hidden => dispatch(toggleSidebar(hidden)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SidebarButton);