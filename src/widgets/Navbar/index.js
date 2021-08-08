import React from 'react';
import PropTypes from 'prop-types';
import {
  Link
} from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import styles from './style';

function NavBar({ classes }) {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/about-us'>About Us</Link>
      <Link to='/sponsor-us'>Sponsor Us</Link>
      <Link to='/join'>Join the Team</Link>
    </div>
  )
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(NavBar);