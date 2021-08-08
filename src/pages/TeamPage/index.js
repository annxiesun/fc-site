import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Route } from "react-router-dom";

import { sectors } from './jobSectors';

import TeamLanding from './TeamLanding/index';
import TeamRole from './TeamRole';

function TeamPage() {
  const [selectedRole, setSelectedRole] = useState(sectors[0].value);

  //<TeamsLanding setSelectedRole={setSelectedRole} />
  return (
    <>
      <Route path="/">
        <TeamLanding setSelectedRole={setSelectedRole} />
      </Route>
      <Route path="/roles">
        <TeamRole selectedRole={selectedRole} />
      </Route>
    </>
  )
}

TeamPage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default TeamPage;