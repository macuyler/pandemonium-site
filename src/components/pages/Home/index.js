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
          <p>
            Pandemonium 2020 is a fun new game, where you try to save as many
            people from the pandemonium as possible. Earn stars on each level to
            gain bragging rights over your friends!
          </p>
          <div className={classes.downloads}>
            <div className={classes.playStore}>Get it on Google Play</div>
            <div className={classes.appStore}>Download on the App Store</div>
          </div>
        </div>
        <h5 className={classes.devs}>Developers</h5>
        <div className={classes.links}>
          <a
            href="https://macuyler.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Macuyler Dunn
          </a>
          <span></span>
          <a
            href="https://danielamidon.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Daniel Amidon
          </a>
        </div>
      </div>
    );
};

export default injectSheet({...PageStyles, ...HomeStyles})(HomePage);
