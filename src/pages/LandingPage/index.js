import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Typography, Grid, Button, Container } from "@material-ui/core";

import { withStyles } from '@material-ui/styles';
import styles from './style';
import Footer from "../../widgets/Footer";

function LandingPage({ classes }) {

  const content = [
    'Fashion for Change is a non-profit organization that unites students from various universities to host the largest student-run charity fashion show in the K-W region. With over 130 executives and models yearly, our family is full of passionate students that use our talents to change the world! We use fashion, dance, film, music, and other mediums to promote artistic expression.',
    'Every year, Fashion for Change chooses a charity to donate to. With over $110,000 in donations to date, we strive to allow students to help locally and globally. We are proud to be making a change both around the world, and right here at home.'
  ];

  const images = [
    {
      foreground: 'https://github.com/annxiesun-2/fc-images/blob/main/landing/SECTION1_foreground.png?raw=true',
      background: 'https://github.com/annxiesun-2/fc-images/blob/main/landing/SECTION1_bg.png?raw=true'
    },
    {
      foreground: 'https://github.com/annxiesun-2/fc-images/blob/main/landing/SECTION2_foreground.png?raw=true',
      background: 'https://github.com/annxiesun-2/fc-images/blob/main/landing/SECTION2_bg.png?raw=true'
    },
  ];
  const photos = [
    'https://github.com/annxiesun-2/fc-images/blob/main/landing/SECTION3_photo1.jpg?raw=true',
    'https://github.com/annxiesun-2/fc-images/blob/main/landing/SECTION3_photo2.jpg?raw=true'
  ];

  const displayStats = [
    { label: 'Money Raised', value: 110000, prefix: '$' },
    { label: 'Sponsors', value: 0, prefix: '' },
    { label: 'Number of Shows', value: 8, prefix: '' },
    { label: 'Team Members', value: 0, prefix: '' }
  ];

  /*

          <Button variant="outlined" size="large" >Experience the Show</Button>*/
  return (
    <>
      <div className={classes.wrapper}>
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
        <div>
          <div>
            <Typography className="title" variant="h2">Proud Charity Partner</Typography>
            <Typography className="desc" variant="body1">{content[1]}</Typography>
          </div>
          <Button>Find out more</Button>
          <img src={photos[0]} />
        </div>
        <Container>
          <Grid container direction="row" justify="center">
            {displayStats.map((stat) => (
              <Grid item container key={stat.label} direction="column" alignItems="center" xs={12} sm={3}>
                <Typography variant="h3">{stat.prefix}{stat.value}</Typography>
                <Typography variant="body1">{stat.label}</Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
        <div style={{ backgroundColor: 'black', width: '100vw', height: '100vh' }} />
        <Footer />
      </div>
    </>
  )
}

LandingPage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(LandingPage);