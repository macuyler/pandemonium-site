import React from 'react';
import injectSheet from 'react-jss';
import Banner from '../../assets/img/city.jpeg';

const HomePage = ({ classes }) => {
    return (
      <div className={classes.page}>
        <h1>Welcome to the Home Page!</h1>
        <img src={Banner} alt="banner" className={classes.img} />
      </div>
    );
};

const styles = {
    page: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    img: {
        width: '100%',
        height: 'auto'
    }
};

export default injectSheet(styles)(HomePage);
