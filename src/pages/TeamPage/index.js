import React, { useState } from 'react';
import { Route, useRouteMatch } from "react-router-dom";

import { sectors } from './jobSectors';

import TeamLanding from './TeamLanding/index';
import TeamRole from './TeamRole';

function TeamPage() {
  let { path } = useRouteMatch();

  return (
    <>
      <Route exact path={path}>
        <TeamLanding />
      </Route>
      {sectors.map((sector) => (
        <Route path={`${path}/${sector.path}`}>
          <TeamRole sector={sector} />
        </Route>
      ))}
    </>
  )
}

export default TeamPage;