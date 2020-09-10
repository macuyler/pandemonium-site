import React from 'react';
import injectSheet from 'react-jss';
import PageStyles from '../styles';
import PrivacyStyles from './styles';

const PrivacyPage = ({ classes }) => {
  return (
    <div className={classes.page}>
      <h1>Privacy Policy</h1>
    </div>
  );
};

export default injectSheet({...PageStyles, ...PrivacyStyles})(PrivacyPage);
