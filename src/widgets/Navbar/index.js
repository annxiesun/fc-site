import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Link,
  useHistory
} from "react-router-dom";
import Lottie from "react-lottie";
import classNames from 'classnames';

import { Collapse, Grid, IconButton, Typography } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";

import { logo, links, menuAnimation } from './content';
import styles from './style';

function SmallNavBar({ classes }) {
  const [open, setOpen] = useState(false);
  const [isStopped, setIsStopped] = useState(false);

  const onClick = () => {
    if (!isStopped) {
      setOpen(prev => !prev);
    }
    setIsStopped(false);
  }

  return (
    <>
      <Grid container justify="space-between" className={classes.navBar}>
        <img alt="logo" className={classes.logo} src={logo} />
        <IconButton aria-label="menu" onClick={onClick}>
          <Lottie
            options={menuAnimation}
            width="40px"
            height="40px"
            isStopped={isStopped}
            direction={open ? 1 : -1}
            speed={1.5}
          />
        </IconButton>
      </Grid>
      <Collapse in={open}>
        <>
          {links.map((link) => (
            <Grid item xs={12} container justify="center" className={classNames(classes.p_2, classes.mb_2)}>
              <Link className={classes.link} to={link.to} onClick={() => setOpen(false)}>
                <Typography>
                  {link.label}
                </Typography>
              </Link>
            </Grid>
          ))}
        </>
      </Collapse>
    </>
  );
}

SmallNavBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

function NavBar({ classes }) {
  const [mobile, setMobile] = useState(false);

  const checkMobile = () => {
    if (window.innerWidth <= 960) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }

  useEffect(() => {
    checkMobile();
    window.addEventListener("resize", checkMobile);
  });

  const largeNavBar = (
    <Grid container justify="space-between" className={classes.navBar}>
      <Grid item xs={2}>
        <img alt="logo" className={classes.logo} src={logo} />
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
  );

  return (
    <>{ mobile ? <SmallNavBar classes={classes} /> : largeNavBar }</>
  )
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(NavBar);