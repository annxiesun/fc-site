import React from 'react';
import { SvgIcon } from '@material-ui/core';

function ThinArrow(props) {
  return (
    <SvgIcon {...props} >
      <path d="M 17 9 L 12 14 L 7 9 L 6 10 l 6 6 l 6 -6 z" />
    </SvgIcon>
  )
}

export default ThinArrow;