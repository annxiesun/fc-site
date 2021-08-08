import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { withStyles } from "@material-ui/core/styles";
import styles from './styles';

function AboutPage({ classes }) {

  const images = [
    'https://github.com/annxiesun-2/fc-images/blob/main/about-us/SECTION1_bg.png?raw=true',
    'https://github.com/annxiesun-2/fc-images/blob/main/about-us/SECTION2_bg.png?raw=true',
  ]

  const body1 = "Through fashion, music, and dance, we have made meaningful connections and have built a creative outlet in Waterloo. Our Annual Charity Fashion Show inspires hundreds of students to be the change in their circles and in the world.";

  return (
    <>
      <div className={classNames(classes.section)}>
        <Grid container justify="flex-end" className={classes.p_7}>
          <Grid item container justify="flex-end" xs={12} className={classes.foreground}>
            <Typography variant="h1">be the change.</Typography>
          </Grid>
          <Grid xs={12} md={6} className={classes.foreground}>
            <Typography className={classes.desc} variant="body1" align="right">{body1}</Typography>
          </Grid>
        </Grid>
        <img className={classes.backgroundImage} src={images[0]} />
      </div>
      <div className={classNames(classes.section)}>
        <Grid container justify="flex-end" className={classes.p_5}>
          <Grid item container justify="flex-end" xs={12} className={classes.foreground}>
            <Typography variant="h2" align="left">Empowering Student Art and Expression</Typography>
          </Grid>
        </Grid>
        <img className={classes.backgroundImage} src={images[1]}></img>
      </div>
    </>
  )
}

AboutPage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AboutPage);