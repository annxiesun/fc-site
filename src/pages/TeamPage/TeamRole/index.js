import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Container, Collapse, Grid, Tab, Tabs, Typography } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";

import { addLineBreaks } from '../../../utils/formatString';

import ThinArrow from '../../../utils/customIcons/ThinArrow';

import { text } from './content';
import styles from './styles';

/************************************************************


SUB_COMPONENT: TabPanel
creates tab that's shown when it's value is selected


************************************************************/
function TabPanel({ classes, role, value, index }) {
  const { header, positions, desc, requirements } = role; // `role` must have these props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      className={classes.roleTabPanel}
    >
      {value === index && (
        <Grid>
          <Typography variant="h3">{header}</Typography>
          <Typography variant="subtitle1">{positions} positions</Typography>
          <Typography variant="body1" className={classes.mb_5}>{addLineBreaks(desc)}</Typography>
          <Typography variant="subtitle1">Requirements:</Typography>
          {requirements.map((req) => (
            <Typography><li>{req}</li></Typography>
          ))}
        </Grid>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  classes: PropTypes.object.isRequired,
  role: PropTypes.object.isRequired,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

/************************************************************


SUB_COMPONENT: ApplicationProcess
creates steps to apply


************************************************************/
function ApplicationProcess({ process, classes }) {
  const { index, header, desc } = process;

  return (
    <Grid item xs={12} className={classNames(classes.p_4, classes.mb_2, classes.applicationProcess)}>
      <Typography variant="h4">{`Step ${index}: ${header}`}</Typography>
      <Typography variant="body1">{desc}</Typography>
    </Grid>
  )
}

ApplicationProcess.propTypes = {
  classes: PropTypes.object.isRequired,
  process: PropTypes.object.isRequired,
}

/************************************************************


SUB_COMPONENT: FAQ
creates collapsable faq


************************************************************/
function FAQ({ classes, faq }) {
  const { question, answer } = faq;

  const [open, setOpen] = useState(false);

  return (
    <Grid container item xs={12} onClick={() => setOpen((prev) => !prev)} className={classNames(classes.faq, classes.p_4, classes.mb_2)}>
      <Grid item xs={11}>
        <Typography variant="h4">{question}</Typography>
        <Collapse in={open}>
          <Typography variant="body1">{answer}</Typography>
        </Collapse>
      </Grid>
      <Grid item xs={1} container justify="flex-end">
        <ThinArrow className={classNames(classes.arrowIcon, open && classes.arrowUp)} fontSize="large" />
      </Grid>
    </Grid>
  )
}

FAQ.propTypes = {
  classes: PropTypes.object.isRequired,
  faq: PropTypes.object.isRequired,
}

// tabProps: formats propTypes for TabPanels
// returns object
function tabProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

/************************************************************



MAIN COMPONENT: TeamRole



************************************************************/
function TeamRole({ classes, sector }) {
  const [value, setValue] = useState(0); // the selected role, indexed from roles

  // when user clicks new role, sets value, which changes the TabPanel
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg">
      {/* POSITION TABS */}
      <Grid container justify="center" className={classes.mb_6}>
        <Grid container>
          {/* ROLE BUTTONS (TABS) */}
          <Grid item xs={12} md={4} className={classes.px_5}>
            <Tabs
              orientation="vertical"
              variant="fullWidth"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              TabIndicatorProps={{ className: classes.tabIndicator }}
              className={classes.tabs}
            >
              {sector.roles.map((role, i) => (
                <Tab
                  className={classes.roleTab}
                  label={role.header}
                  {...tabProps(i)} />
              ))}
            </Tabs>
          </Grid>
          {/* ROLE DESCRIPTIONS (TABPANELS) */}
          <Grid item xs={12} md={8}>
            {sector.roles.map((role, i) => (
              <TabPanel classes={classes} value={value} index={i} role={role} />
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* APPLICATION PROCESS */}
      <Grid container justify="center" className={classes.mb_6}>
        <Typography variant="h2" className={classes.mb_3}>
          {text.APPLICATION_PROCCES.header}
        </Typography>
        {sector.processes.map((process) => (
          <ApplicationProcess process={process} classes={classes} />
        ))}
      </Grid>

      {/* FAQS */}
      <Grid container className={classes.mb_3} justify="center">
        <Typography variant="h2" className={classes.mb_6}>
          {text.FAQS.header}
        </Typography>
        {sector.faqs.map((faq) => (
          <FAQ faq={faq} classes={classes} />
        ))}
      </Grid>
    </Container>
  )
}

TeamRole.propTypes = {
  classes: PropTypes.object.isRequired,
  sector: PropTypes.object.isRequired, // object that has the information needed to be displayed, one of sectors found in jobSectors.js
}

export default withStyles(styles)(TeamRole);