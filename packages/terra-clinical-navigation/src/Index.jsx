import { connect } from 'react-redux';

import Navigation from './Navigation';

import navigationReducers from './reducers';
import { update } from './actions';

const mapStateToProps = (state, ownProps) => (
  (navigationState => ({
    navigationState: navigationState[ownProps.navigationKey],
  }))(state.navigation)
);

export { mapStateToProps };

const mapDispatchToProps = dispatch => ({
  updateNavigation: (data) => { dispatch(update(data)); },
});

export { mapDispatchToProps };

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

const reducers = {
  navigation: navigationReducers,
};
export { reducers };
