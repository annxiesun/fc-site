import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Grid, Typography } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";

import styles from './styles';


function AboutPage({ classes }) {

  const images = [
    'https://github.com/annxiesun-2/fc-images/blob/main/about-us/SECTION1_bg.png?raw=true',
    'https://github.com/annxiesun-2/fc-images/blob/main/about-us/SECTION2_bg.png?raw=true',
    'https://github.com/annxiesun-2/fc-images/blob/main/about-us/PHOTO1.png?raw=true',
    'https://github.com/annxiesun-2/fc-images/blob/main/about-us/PHOTO2.png?raw=true',
  ]

  const filmStrip = 'https://github.com/annxiesun-2/fc-images/blob/main/about-us/FILMSTRIP.png?raw=true';

  const body1 = "Through fashion, music, and dance, we have made meaningful connections and have built a creative outlet in Waterloo. Our Annual Charity Fashion Show inspires hundreds of students to be the change in their circles and in the world.";

  return (
    <>
      <div className={classNames(classes.headerSection)}>
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
      <div className={classNames(classes.headerSection)}>
        <Grid container justify="flex-end" className={classes.p_5}>
          <Grid item container justify="flex-end" xs={6} className={classes.foreground}>
            <Typography variant="h2" align="left">Empowering Student Art and Expression</Typography>
          </Grid>
        </Grid>
        <img className={classes.backgroundImage} src={images[1]}></img>
      </div>
      <Grid container>
        <Grid item xs={12} md={6} className={classes.infoContainer}>
          <img className={classes.photo} src={images[2]} />
        </Grid>
        <Grid xs={12} md={6} className={classes.infoContainer}>
          <Typography variant="h2">Creating a Tight-Knit Community</Typography>
        </Grid>
        <Grid xs={12} md={6} className={classes.infoContainer}>
          <Typography variant="h2">Acting Locally, Impacting Globally</Typography>
        </Grid>
        <Grid xs={12} md={6} className={classes.infoContainer}>
          <img className={classes.photo} src={images[3]} />
        </Grid>
      </Grid>
      <div className={classNames(classes.section)}>
        <img className={classes.filmStrip} alt="film-strip" src={filmStrip} />
      </div>
      <Grid container>
        <Grid item xs={12} md={8} className={classes.p_5}>
          <Typography variant="h2">The Charity</Typography>
          <Typography variant="body1">The Board of Director team works together to choose a charity to donate to each year. They consider local and international groups, as well as where the money would be best used at the time. Fashion for Change is proud to be making a change both around the world, and right here at home. This year, Fashion for Change will be supporting Family and Children Services Foundation of the Waterloo Region. Due to COVID-19, our team wanted to support a charity close to home this year as we feel it’s imperative to give back to our community.</Typography>
        </Grid>
        <Grid item xs={0} md={4}/>
        <Grid item xs={0} md={4}/>
        <Grid item xs={12} md={8}  className={classes.p_5}>
          <Typography variant="h2" align="right">Family and Children Services</Typography>
          <Typography variant="body1" align="right">Established in 1991, FACS Foundation has been addressing the most urgent needs of families in the Waterloo community by providing numerous different support programs. Donations are used to allow children to continue schooling, to provide groceries and other necessities, as neglect. FACS Foundation has a vision of creating a caring and supportive community that allows children and families to thrive while focusing on 4 elements of a person’s well-being: physical, spiritual, emotional, and mental.</Typography>
        </Grid>
      </Grid>
    </>
  )
}

AboutPage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AboutPage);