import React from 'react';
import HomePage from './pages/Home';
import Banner from '../assets/img/city.jpeg';

const App = () => {
  return (
    <div className="App">
      <HomePage />
      <img src={Banner} alt="banner" />
    </div>
  );
}

export default App;
