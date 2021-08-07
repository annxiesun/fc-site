import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from "@material-ui/core/styles";
import styles from './styles';

function AboutPage({ classes }) {

  const images = [
    'https://github.com/annxiesun/images/blob/main/ABOUT_US_SECTION1.png?raw=true',
    'https://github.com/annxiesun/images/blob/main/ABOUT_US_SECTION2.png?raw=true',
  ]
  return (
    <>
    <div className={classes.m_1}></div>
    <img src={images[0]}></img>
    <img src={images[1]}></img>
    </>
  )
}

AboutPage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AboutPage);