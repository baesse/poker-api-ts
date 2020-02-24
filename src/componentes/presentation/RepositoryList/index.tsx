import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Repository } from '../../../store/ducks/repositories/types';
import * as RepositoriesActions from '../../../store/ducks/repositories/actions';
import { ApplicationState } from '../../../store';

interface StateProps {
  repositories: Repository[];
}

interface DispatchProps {
  loadRequest(): void;
}

type Props = StateProps & DispatchProps;

const RepositoryList: React.FunctionComponent<Props> = ({
  repositories,
  loadRequest
}) => {
  useEffect(() => {
    loadRequest();
  }, [loadRequest])

  return (
    <div>
      {repositories.map(e => (
        <li>{e.name}</li>
      ))}
    </div>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);
