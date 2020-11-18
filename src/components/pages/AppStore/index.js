import React from 'react';
import AppStoreStyles from './styles';
import pageInject from '../inject';

const AppStorePage = ({ classes }) => {
  return (
    <div className={classes.page}>
      <h1 className={classes.h1}>App Store Page</h1>
    </div>
  );
};

export default pageInject(AppStoreStyles)(AppStorePage);
