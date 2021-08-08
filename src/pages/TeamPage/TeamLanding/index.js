import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useRouteMatch, Link } from "react-router-dom";

import { Container, Grid, Typography, Button } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";

import { text, processGeneral } from './content.js';
import { sectors } from '../jobSectors';
import styles from './styles';

// Instruction Card: formats instruction into card format
// returns JSX component
function InstructionCard({ classes, instruction }) {
  const { index, icon, header, desc } = instruction; // `instruction` must have all these props

  return (
    <Grid container item xs={12} md={4} className={classes.instructionCardWrapper}>
      <div className={classes.instructionCard}>
        <Grid container justify="space-between" className={classes.mb_3}>
          <Typography variant="h6">Step {index}</Typography>
          {icon}
        </Grid>
        <Grid>
          <Typography variant="h4" className={classes.mb_3}>{header}</Typography>
          <Typography variant="body1">{desc}</Typography>
        </Grid>
      </div>
    </Grid>
  )
}

InstructionCard.propTypes = {
  classes: PropTypes.object.isRequired,
  instruction: PropTypes.object.isRequired,
}

function TeamLanding({ classes }) {
  let { url } = useRouteMatch(); // gets URL to link to sub-routes

  return (
    <Container maxWidth="lg">
      <Grid container justify="center">
        {/* HEADER 1*/}
        <Grid item xs={12}>
          <Typography variant="h2" align="center">{text.APPLICATION_PROCCES.header}</Typography>
        </Grid>
        <Grid item xs={8} className={classes.mb_5}>
          <Typography variant="body1" align="center">{text.APPLICATION_PROCCES.desc}</Typography>
        </Grid>

        {/* Instruction Card Container */}
        <Grid container className={classNames(classes.instructionCardContainer, classes.mb_5)}>
          {processGeneral.map((instruction, i) => {
            return (
              <InstructionCard instruction={instruction} classes={classes} />
            )
          })}
        </Grid>

        {/* HEADER 2*/}
        <Grid item xs={12}>
          <Typography variant="h2" align="center">{text.OUR_TEAMS.header}</Typography>
        </Grid>
        <Grid item xs={8} className={classes.mb_5}>
          <Typography variant="body1" align="center">{text.OUR_TEAMS.desc}</Typography>
        </Grid>

        {/* Button container, each links to their respective TeamRole page */}
        <Grid container className={classes.mb_5}>
          {sectors.map((sector) => (
            <Grid item xs={4} className={classNames(classes.p_2, classes.borderBox)}>
              <Link to={`${url}/${sector.path}`} className={classes.linkWrapper}>
                <Button className={classes.roleButton} variant="outlined">{sector.label}</Button>
              </Link>
            </Grid>
          ))}
        </Grid>

        {/* MEET DIRECTORS SECTION */}
        <Grid item xs={12}>
          <Typography variant="h2" align="center">{text.MEET_DIRECTORS.header}</Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

TeamLanding.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(TeamLanding);