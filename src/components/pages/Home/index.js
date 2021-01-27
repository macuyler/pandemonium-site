import React from 'react';
import { Link } from 'react-router-dom';
import HomeStyles from './styles';
import pageInject from '../inject';
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
          <a
            className={classes.playStore}
            href="https://play.google.com/store/apps/details?id=com.macuyler.pandemonium2020"
            rel="noopener noreferrer"
            target="_blank"
          >
            Get it on Google Play
          </a>
        </div>
      </div>
      <footer className={classes.footer}>
        <div className={classes.links}>
          <h5>Developers:</h5>
          <a
            href="https://macuyler.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Macuyler Dunn
          </a>
          <a
            href="https://danielamidon.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Daniel Amidon
          </a>
        </div>
        <div className={classes.links}>
          <h5>Pages:</h5>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/support">Support Page</Link>
        </div>
        <div className={classes.links}>
          <h5>GitHub:</h5>
          <a
            href="https://github.com/macuyler/pandemonium2020"
            rel="noopener noreferrer"
            target="_blank"
          >
            2020 App
          </a>
          <a
            href="https://github.com/macuyler/site2020"
            rel="noopener noreferrer"
            target="_blank"
          >
            2020 Site
          </a>
        </div>
      </footer>
    </div>
  );
};

export default pageInject(HomeStyles)(HomePage);
