import React from 'react';
import { Typography } from '@material-ui/core';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { withStyles } from "@material-ui/core/styles";
import styles from './styles';

function AboutPage({ classes }) {

  const images = [
    'https://github.com/annxiesun/images/blob/main/ABOUT_US_SECTION1.png?raw=true',
    'https://github.com/annxiesun/images/blob/main/ABOUT_US_SECTION2.png?raw=true',
  ]

  const body1 = "Through fashion, music, and dance, we have made meaningful connections and have built a creative outlet in Waterloo. Our Annual Charity Fashion Show inspires hundreds of students to be the change in their circles and in the world.";

  return (
    <>
      <div className={classes.m_1}>
        <Typography variant="h1">be the change.</Typography>
        <Typography variant="body1">{body1}</Typography>
        <img className={classes.backgroundImage} src={images[0]} />
      </div>
      <img className={classes.backgroundImage} src={images[1]}></img>
    </>
  )
}

AboutPage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AboutPage);