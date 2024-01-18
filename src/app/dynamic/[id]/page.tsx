import React from 'react';

const First: React.FC<{params: {id: string}}> = ({params}) => (
  <div>{`I'm sending this parameter to to endpoint ${params.id}`}</div>
);

export default First;
