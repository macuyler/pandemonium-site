import React from 'react';
import injectSheet from 'react-jss';

const SupportPage = ({ classes }) => {
  return (
    <div className={classes.page}>
      <h1>Support Page</h1>
    </div>
  );
};

const styles = {
  page: {
    width: '100%',
    boxSizing: 'border-box',
    padding: 20,
  },
};

export default injectSheet(styles)(SupportPage);
