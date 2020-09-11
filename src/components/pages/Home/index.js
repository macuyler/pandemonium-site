import React from 'react';
import injectSheet from 'react-jss';
import PageStyles from '../styles';
import HomeStyles from './styles';
import Logo from '../../../assets/img/icon.png';

const HomePage = ({ classes }) => {
    return (
      <div className={classes.page}>
        <div className={classes.banner}>
          <h1>pandemonium 2020</h1>
        </div>
        <div className={classes.about}>
            <img src={Logo} alt="Logo" />
            <h1>What is Pandemonium?</h1>
            <p>Pandemonium 2020 is a fun new game, where you try to save as many people from the pandemonium as possible. Earn stars on each level to gain bragging rights over your friends!</p>
        </div>
      </div>
    );
};

export default injectSheet({...PageStyles, ...HomeStyles})(HomePage);
