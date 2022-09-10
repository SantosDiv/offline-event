import React from 'react';
import SplashScreen from './components/SplashScreen';
import OfflineOverviewScreen from './components/OfflineOverviewScreen';
import MaintenanceScreen from './components/MaintenanceScreen';
import './App.css';

function App() {
  console.log(process.env.REACT_APP_ENABLE)
  if (!process.env.REACT_APP_ENABLE) return <MaintenanceScreen/>
  return (
    <div className="App">
      <SplashScreen />
      <OfflineOverviewScreen />
    </div>
  );
}

export default App;
