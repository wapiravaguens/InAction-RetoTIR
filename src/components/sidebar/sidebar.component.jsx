import React from 'react';
import './sidebar.styles.scss';

// Redux
import { connect } from 'react-redux';

const Sidebar = ({ hidden }) => {
	return (
		<div className={`sidebar ${hidden ? 'hidden' : ''}`} >
			Sidebar
		</div>
	)
}

const mapStateToProps = ({ sidebar }) => ({
	hidden: sidebar.hidden,
});

export default connect(mapStateToProps)(Sidebar);