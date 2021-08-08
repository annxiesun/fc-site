import React from 'react';
import PropTypes from 'prop-types';
import {
  Link
} from "react-router-dom";

import { Grid, Typography } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";

import styles from './style';

function NavBar({ classes }) {
  const logo = "https://github.com/annxiesun-2/fc-images/blob/main/fc_logo.png?raw=true";

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about-us', label: 'About Us' },
    { to: '/sponsor-us', label: 'Sponsor Us' },
    { to: '/join', label: 'Join the team' },

  ]
  return (
    <Grid container justify="space-between" className={classes.navBar}>
      <Grid item xs={2}>
        <img className={classes.logo} src={logo} />
      </Grid>
      <Grid container item xs={10} justify="flex-end" alignItems="center">
        {links.map((link) => (
          <Link className={classes.link} to={link.to}>
            <Typography>
              {link.label}
            </Typography>
          </Link>
        ))}
      </Grid>
    </Grid>
  )
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(NavBar);