import React from 'react';
import './App.scss';

// Components
import Sidebar from './components/sidebar/sidebar.component';

function App() {
  return (
    <div className='app'>
      <Sidebar />
      <div className='content'></div>
    </div>
  );
}

export default App;
