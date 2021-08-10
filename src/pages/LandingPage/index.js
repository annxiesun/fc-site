/******************************************************************


UNFINISHED & UNORGANIZED,

WILL COME BACK AFTER FINISHING OTHER PAGES, NEEDED BREAK
MORE ORGANIZED SECTIONS: ABOUTPAGE & TEAMPAGE


/******************************************************************/

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Button, Container, Grid, Typography } from "@material-ui/core";

import { withStyles } from '@material-ui/styles';

import { text, images, displayStats } from './content'
import styles from './style';

function LandingPage({ classes }) {
  return (
    <Container maxWidth="xl">
      {/*SECTION 1*/}
      <Grid container className={classes.section}>
        <Grid className={classNames(classes.floatingText, classes.section1Text)} container direction="column" alignItems="center">
          <Typography className={classes.header} variant="h1" align="center">{text.FASHION_FOR_CHANGE}</Typography>
          <Button className={classes.button} variant="outlined" size="large" >{text.EXPERIENCE_THE_SHOW}</Button>
        </Grid>
        <img className={classes.fgImage} src={images.SECTION1_FG.src} alt={images.SECTION1_FG.alt} />
        <img className={classes.bgImage} src={images.SECTION1_BG.src} alt={images.SECTION1_BG.alt} />
      </Grid>

      {/*SECTION 2*/}
      <Grid className={classes.section}>
        <Grid className={classNames(classes.floatingText, classes.p_4, classes.section2Text)} container direction="column" alignItems="flex-end">
          <Typography variant="h2" gutterBottom align="right" c>{text.ARTISTIC_EXPRESSION.header}</Typography>
          <Grid item xs={12} md={4}>
            <Typography variant="body1" align="right">{text.ARTISTIC_EXPRESSION.desc}</Typography>
          </Grid>
        </Grid>
        <Button className="button">Find out more</Button>
        <img className={classes.fgImage} src={images.SECTION2_FG.src} alt={images.SECTION2_FG.alt} />
        <img className={classNames(classes.bgImage, classes.bgImage2)} src={images.SECTION2_BG.src} alt={images.SECTION2_BG.alt} />
      </Grid>

      {/*SECTION 3*/}
      <Grid container alignItems="center">
        <Grid item xs={12} md={6} className={classes.p_7}>
          <Typography className="title" variant="h2">{text.CHARITY_PARTNER.header}</Typography>
          <Typography className="desc" variant="body1">{text.CHARITY_PARTNER.desc}</Typography>
          <Button>Find out more</Button>
        </Grid>
        <Grid item xs={12} md={6} className={classes.p_7}>
          <img className={classes.photo} src={images.PHOTO_1.src} alt={images.PHOTO_1.alt} />
        </Grid>
      </Grid>

      {/*STATS SECTION*/}
      <Grid container direction="row" justify="center">
        {displayStats.map((stat) => (
          <Grid item container key={stat.label} direction="column" alignItems="center" xs={12} sm={3}>
            <Typography variant="h3">{stat.prefix}{stat.value}</Typography>
            <Typography variant="body1">{stat.label}</Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

LandingPage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(LandingPage);