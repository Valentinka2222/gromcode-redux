import { connect } from 'react-redux';
import { availableOptionSelector } from './options.selector';
import Options from './Options';
import { toogleOptions } from './options.actions';

const mapState = state => {
  return {
    options: availableOptionSelector(state),
  };
};

const mapDispatch = {
  moveOption: toogleOptions,
};
export default connect(mapState, mapDispatch)(Options);
