import React from 'react';
import './sidebar.styles.scss';

const Sidebar = ({ hidden }) => {
	return (
		<div className={`sidebar ${hidden ? 'hidden' : ''}`} >
			Sidebar
		</div>
	)
}

export default Sidebar;