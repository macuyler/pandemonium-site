import React from 'react';
import Banner from '../../assets/img/city.jpeg';

const HomePage = () => {
    return (
      <div className="Page">
        <h1>Welcome to the Home Page!</h1>
        <img src={Banner} alt="banner" />
      </div>
    );
};

export default HomePage;
