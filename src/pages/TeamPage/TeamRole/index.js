import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Container, Grid, Tab, Tabs, Typography } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";

import styles from './styles';

function TabPanel({ classes, role, value, index }) {
  const { title, positions, desc, requirements } = role;

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
          <Typography variant="h3">{title}</Typography>
          <Typography variant="subtitle1">{positions} position</Typography>
          <Typography variant="body1" className={classes.mb_5}>{desc}</Typography>
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
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function tabProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

function TeamRole({ classes, sector }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid container className={classes.mb_6}>
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
                  label={role.title}
                  {...tabProps(i)} />
              ))}
            </Tabs>
          </Grid>
          <Grid item xs={12} md={8}>
            {sector.roles.map((role, i) => (
              <TabPanel classes={classes} value={value} index={i} role={role} />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

TeamRole.propTypes = {
  classes: PropTypes.object.isRequired,
  sector: PropTypes.object.isRequired,
}

export default withStyles(styles)(TeamRole);