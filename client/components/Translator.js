import React from 'react';
import applyAccent from '../../lib/filters/_apply';

/**
 * Component:
 */
class Translator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      accent: "",
    }
    this.translate = this.translate.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.accents = {
      borikense: require('../../lib/accents/borikense'),
    }
  }
  translate () {
    this.setState({ 
      input: applyAccent(this.state.input, this.accents[this.state.accent])
    })
  }
  handleInput (e) {
    console.log('name:', e.target.name, e.target.value)
    this.setState({ 
      [e.target.name]: e.target.value
    })
  }
  render () {
    return (
      <div>
        Translator

        <select name="accent" value={this.state.accent} onChange={this.handleInput}>
          <option value="">Select</option>
          {
            Object.keys(this.accents).map((x, idx) => {
              return <option key={idx} value={x}>{x}</option>
            })
          }
        </select>

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