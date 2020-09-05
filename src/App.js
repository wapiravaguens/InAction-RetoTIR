import React, { useState } from 'react';
import './App.scss';

import { Switch, Route } from 'react-router-dom';

// Components
import Sidebar from './components/sidebar/sidebar.component';
import SidebarButton from './components/sidebar-button/sidebar-button.component';

// Pages
import Calc from './pages/calc/calc.component';
import Dividends from './pages/dividends/dividends.component';
import Indicators from './pages/indicators/indicators.component';

const App = () => {
  return (
    <div className='app'>
    
      <Sidebar />

      <div className='content'>
          <SidebarButton />
          <div className='pages'>
            <Switch>
              <Route exact path='/' component={Calc} />
              <Route exact path='/dividends' component={Dividends} />
              <Route exact path='/indicators' component={Indicators} />
            </Switch>
          </div>
      </div>

    </div>
  );
}

export default App;
