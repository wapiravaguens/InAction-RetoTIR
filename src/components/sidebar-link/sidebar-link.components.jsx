import React from 'react';
import './sidebar-link.styles.scss';

import { Link } from 'react-router-dom';

const SidebarLink = ({ to, text, icon }) => {
	return (
		<div href={to} className='sidebar-link'>
			<Link to={to}>
				<ion-icon name={icon}></ion-icon>
				<div className="sidebar-link__text">{text}</div>	
			</Link>
		</div>
	)
}

export default SidebarLink;