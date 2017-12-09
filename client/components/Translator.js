import React from 'react';
import applyAccent from '../../lib/filters/_apply';
import borikense from '../../lib/accents/borikense';



/**
 * Component:
 */
class Translator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    }
    this.translate = this.translate.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }
  translate () {
    this.setState({ 
      input: applyAccent(this.state.input, borikense)
    })
  }
  handleInput (e) {
    this.setState({ 
      input: e.target.value
    })
  }
  render () {
    return (
      <div>
        Translator

        <input 
          type="text"
          name="input"
          value={this.state.input}
          onChange={this.handleInput} />

        <button onClick={this.translate}>Translate</button>
      </div>
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