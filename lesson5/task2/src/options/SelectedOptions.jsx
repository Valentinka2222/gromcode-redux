import { connect } from 'react-redux';
import { selectedOptionsSelector } from './options.selector';
import Options from './Options';
import { toogleOptions } from './options.actions';

const mapState = state => {
  return {
    options: selectedOptionsSelector(state),
  };
};

const mapDispatch = {
  moveOption: toogleOptions,
};
export default connect(mapState, mapDispatch)(Options);
