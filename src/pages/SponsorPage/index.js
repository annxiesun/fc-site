import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Grid, Typography } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import { text } from './content'

import styles from './styles';


function SponsorPage({ classes }) {
  return (
    <Grid>
      <Typography>Hi</Typography>
    </Grid>
  )
}

SponsorPage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SponsorPage);