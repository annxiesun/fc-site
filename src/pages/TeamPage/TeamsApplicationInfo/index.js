import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Container, Grid, Typography } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";

import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ScheduleIcon from '@material-ui/icons/Schedule';

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

function TeamLanding({ classes, setSelectedRole }) {
  const desc = "Every academic year, applications are opened for Directors, Executives, and Models. There are a lot of opportunities to get involved at Fashion for Change! We welcome everyone, new and returning members, to apply to a position that interests you.";
  const desc2 = "Each team has a different focus and function in building our annual charity fashion show. Click to find out more about each team and its positions.";

  const instructions = [
    { index: 1, icon: <InfoOutlinedIcon fontSize="large" />, title: 'Attend the Information Session', desc: 'Learn more about Fashion for Change at our annual information session on the campus. You’ll be able to find out more about the open positions and the plans for the year.\n\nCheck out out Facebook, Instagram, and Twitter for announcements.' },
    { index: 2, icon: <AssignmentIcon fontSize="large" />, title: 'Apply', desc: 'Apply Most* applications are open right after the information session in September. There are separate applications and processes for each team, these are posted on the team pages. *Directors positions are filled in the summer prior to the academic term.' },
    { index: 3, icon: <ScheduleIcon fontSize="large" />, title: 'Interviews, Auditions & Final Decisions', desc: 'Most teams will require an interview to be considered for an executive role. You will be contacted for an interview by the respective team\'s director. Models are required to go through auditions, which are announced ahead of time. Final decicions for executives are usually made in mid-October.' }
  ];

  return (
    <Container maxWidth="lg">
      <Grid container justify="center">
        <Grid item xs={12}>
          <Typography variant="h2" align="center">Application Process</Typography>
        </Grid>
        <Grid item xs={8} className={classes.mb_5}>
          <Typography variant="body1" align="center">{desc}</Typography>
        </Grid>
        
        <Grid container className={classNames(classes.instructionCardContainer, classes.mb_5)}>
          {instructions.map((instruction, i) => {
            return (
              <InstructionCard instruction={instruction} classes={classes} />
            )
          })}
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h2" align="center">Our Teams</Typography>
        </Grid>
        <Grid item xs={8} className={classes.mb_5}>
          <Typography variant="body1" align="center">{desc2}</Typography>
        </Grid>

        <Grid>
          
        </Grid>
      </Grid>
    </Container>
  )
}

TeamLanding.propTypes = {
  classes: PropTypes.object.isRequired,
  setSelectedRole: PropTypes.func.isRequired,
}

export default withStyles(styles)(TeamLanding);