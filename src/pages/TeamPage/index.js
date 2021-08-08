import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { roles } from './roles';

import TeamsLanding from './TeamsLanding/index';

function TeamPage() {
  const [selectedRole, setSelectedRole] = useState(roles[0].value);

  return (
    <TeamsLanding setSelectedRole={setSelectedRole} />
  )
}

TeamPage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default TeamPage;