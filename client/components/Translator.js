import React from 'react';

/**
 * Component:
 */
class Translator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render () {
    return (
      <div> Hello World </div>
    )
  }
}

/**
 * Container:
 */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators(
  {

  },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Translator);