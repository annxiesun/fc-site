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

import { images } from './content'
import styles from './style';

function LandingPage({ classes }) {

  const content = [
    'Fashion for Change is a non-profit organization that unites students from various universities to host the largest student-run charity fashion show in the K-W region. With over 130 executives and models yearly, our family is full of passionate students that use our talents to change the world! We use fashion, dance, film, music, and other mediums to promote artistic expression.',
    'Every year, Fashion for Change chooses a charity to donate to. With over $110,000 in donations to date, we strive to allow students to help locally and globally. We are proud to be making a change both around the world, and right here at home.'
  ];

  const displayStats = [
    { label: 'Money Raised', value: 110000, prefix: '$' },
    { label: 'Sponsors', value: 0, prefix: '' },
    { label: 'Number of Shows', value: 8, prefix: '' },
    { label: 'Team Members', value: 0, prefix: '' }
  ];

  /*

          <Button variant="outlined" size="large" >Experience the Show</Button>
          
                  <Grid className={classes.section} container direction="column" alignItems="center">
          <Typography className={classes.header} variant="h1" align="center">fashion for change</Typography>
          <Button className={classes.button} variant="outlined" size="large" >Experience the Show</Button>
          <div className={classes.fg_1}>
            <img className={classNames(classes.section, classes.sectionImage)} src={images[0].foreground} />
            <div className={classes.blackCover}></div>
          </div>
          <img className={classNames(classes.section, classes.sectionImage, classes.bg)} src={images[0].background} />

        </Grid>
        <div className={classes.section}>
          <div>
            <Typography variant="h3" gutterBottom>Artistic expression for good.</Typography>
            <Typography variant="body1">{content[0]}</Typography>
          </div>
          <Button className="button">Find out more</Button>
          <img className={classes.fg_2} src={images[1].foreground} />
          <img className={classes.bg} src={images[1].background} />
        </div>
        */
  return (
    <Container maxWidth="xl">
      <Grid container direction="column" alignItems="center" className={classes.section}>
        <Grid className={classes.floatingText}>
          <Typography className={classes.header} variant="h1" align="center">fashion for change</Typography>
          <Button className={classes.button} variant="outlined" size="large" >Experience the Show</Button>
        </Grid>
        <img className={classes.fgImage} src={images.SECTION1_FG.src} alt={images.SECTION1_FG.alt} />
        <img className={classes.bgImage} src={images.SECTION1_BG.src} alt={images.SECTION1_BG.alt} />
      </Grid>
      <Grid container alignItems="center">
        <Grid item xs={12} md={6} className={classes.p_7}>
          <Typography className="title" variant="h2">Proud Charity Partner</Typography>
          <Typography className="desc" variant="body1">{content[1]}</Typography>
          <Button>Find out more</Button>
        </Grid>
        <Grid item xs={12} md={6} className={classes.p_7}>
          <img className={classes.photo} src={images.PHOTO_1.src} alt={images.PHOTO_1.alt} />
        </Grid>
      </Grid>
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