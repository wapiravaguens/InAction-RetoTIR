import React, { useState } from 'react';
import './App.scss';

// Components
import Sidebar from './components/sidebar/sidebar.component';
import SidebarButton from './components/sidebar-button/sidebar-button.component';

const App = () => {
  return (
    <div className='app'>
    
      <Sidebar />

      <div className='content'>
          <SidebarButton />
      </div>

    </div>
  );
}

export default App;
