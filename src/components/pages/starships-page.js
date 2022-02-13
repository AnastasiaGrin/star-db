import React from 'react';
import { StarshipList } from '../sw-components';
import { withRouter } from '../withRouter';

const StarshipsPage = ({ history }) => {
  return (
      <StarshipList
          onItemSelected={(id) => history.push(id)} />
  );
};

export default withRouter(StarshipsPage);