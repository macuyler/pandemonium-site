import React from 'react';
import injectSheet from 'react-jss';
import PageStyles from '../styles';
import SupportStyles from './styles';

const SupportPage = ({ classes }) => {
  return (
    <div className={classes.page}>
      <h1>Support Page</h1>
    </div>
  );
};

export default injectSheet({...PageStyles, ...SupportStyles})(SupportPage);
