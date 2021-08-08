import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Grid, Typography } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";

import { text, images } from './content'
import styles from './styles';


function AboutPage({ classes }) {

  return (
    <>
      {/* FIRST SECTION */}
      <div className={classNames(classes.headerSection)}>
        <Grid container justify="flex-end" className={classes.p_7}>
          <Grid item container justify="flex-end" xs={12} className={classes.foreground}>
            <Typography variant="h1">{text.BE_THE_CHANGE.header}</Typography>
          </Grid>
          <Grid xs={12} md={6} className={classes.foreground}>
            <Typography className={classes.desc} variant="body1" align="right">{text.BE_THE_CHANGE.desc}</Typography>
          </Grid>
        </Grid>
        <img className={classes.backgroundImage} src={images.SECTION1_BG.src} alt={images.SECTION1_BG.alt} />
      </div>

      {/* SECOND SECTION */}
      <div className={classNames(classes.headerSection)}>
        <Grid container justify="flex-end" className={classes.p_5}>
          <Grid item container justify="flex-end" xs={6} className={classes.foreground}>
            <Typography variant="h2" align="left">{text.EMPOWERING_STUDENT_ART.header}</Typography>
          </Grid>
        </Grid>
        <img className={classes.backgroundImage} src={images.SECTION2_BG.src} alt={images.SECTION2_BG.alt} />
      </div>

      {/* THIRD SECTION */}
      <Grid container>
        <Grid item xs={12} md={6} className={classes.infoContainer}>
          <img className={classes.photo} src={images.PHOTO1.src} alt={images.PHOTO1.alt} />
        </Grid>
        <Grid xs={12} md={6} className={classes.infoContainer}>
          <Typography variant="h2">{text.CREATING_TIGHT_KNIT.header}</Typography>
        </Grid>
        <Grid xs={12} md={6} className={classes.infoContainer}>
          <Typography variant="h2">{text.ACTING_LOCALLY.header}</Typography>
        </Grid>
        <Grid xs={12} md={6} className={classes.infoContainer}>
          <img className={classes.photo} src={images.PHOTO2.src} alt={images.PHOTO2.alt} />
        </Grid>
      </Grid>

      {/* FILM STRIP */}
      <div className={classNames(classes.section)}>
        <img className={classes.filmStrip} src={images.FILM_STRIP.src} alt={images.FILM_STRIP.alt} />
      </div>

      {/* FOURTH SECTION, CHARITY INFO */}
      <Grid container>
        <Grid item xs={12} md={8} className={classes.p_5}>
          <Typography variant="h2">{text.THE_CHARITY.header}</Typography>
          <Typography variant="body1">{text.THE_CHARITY.desc}</Typography>
        </Grid>
        {/* BLANK GRID SPACES TO FORMAT TEXT */}
        <Grid item xs={0} md={4} />
        <Grid item xs={0} md={4} />
        <Grid item xs={12} md={8} className={classes.p_5}>
          <Typography variant="h2" align="right">{text.FAMILY_AND_CHILD.header}</Typography>
          <Typography variant="body1" align="right">{text.FAMILY_AND_CHILD.desc}</Typography>
        </Grid>
      </Grid>
    </>
  )
}

AboutPage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AboutPage);