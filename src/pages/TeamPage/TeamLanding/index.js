import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useRouteMatch, Link } from "react-router-dom";

import { Container, Grid, Typography, Button } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";

import { headers, processGeneral } from '../teamsContent.js';
import { sectors } from '../jobSectors';
import styles from './styles';

function InstructionCard({ classes, instruction }) {
  const { index, icon, title, desc } = instruction;

  return (
    <Grid container item xs={12} md={4} className={classes.instructionCardWrapper}>
      <div className={classes.instructionCard}>
        <Grid container justify="space-between" className={classes.mb_3}>
          <Typography variant="h6">Step {index}</Typography>
          {icon}
        </Grid>
        <Grid>
          <Typography variant="h4" className={classes.mb_3}>{title}</Typography>
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
  let { url } = useRouteMatch();

  return (
    <Container maxWidth="lg">
      <Grid container justify="center">
        <Grid item xs={12}>
          <Typography variant="h2" align="center">{headers.APPLICATION_PROCCES.header}</Typography>
        </Grid>
        <Grid item xs={8} className={classes.mb_5}>
          <Typography variant="body1" align="center">{headers.APPLICATION_PROCCES.desc}</Typography>
        </Grid>

        <Grid container className={classNames(classes.instructionCardContainer, classes.mb_5)}>
          {processGeneral.map((instruction, i) => {
            return (
              <InstructionCard instruction={instruction} classes={classes} />
            )
          })}
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h2" align="center">{headers.OUR_TEAMS.header}</Typography>
        </Grid>
        <Grid item xs={8} className={classes.mb_5}>
          <Typography variant="body1" align="center">{headers.OUR_TEAMS.desc}</Typography>
        </Grid>

        <Grid container className={classes.mb_5}>
          {sectors.map((sector) => (
            <Grid item xs={4} className={classNames(classes.p_2, classes.borderBox)}>
              <Link to={`${url}/${sector.path}`}>
                <Button className={classes.roleButton} variant="outlined">{sector.label}</Button>
              </Link>
            </Grid>
          ))}
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h2" align="center">{headers.MEET_DIRECTORS.header}</Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

TeamLanding.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(TeamLanding);