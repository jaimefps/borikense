import React from 'react';
// components:
import {Dropdown} from './_helpers';
//libs:
import translate from '../../lib/filters/_apply';
import dictionary from '../../lib/dictionary';

// Main Component:
export default class Translator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      translation: "",
      language: "",
      accent: "",
    }
    this.translate = this.translate.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }
  translate () {
    const accent = dictionary[this.state.language][this.state.accent];
    this.setState({ 
      translation: translate(this.state.input, accent)
    })
  }
  handleInput (e) {
    this.setState({ 
      [e.target.name]: e.target.value
    })
  }
  render () {
    return (
      <div className="translator-container">

        <h1>Accent Translator</h1>

        <div className="dropdowns-container">
          <div>
            <label> choose langauge: </label>
            <Dropdown show
                      name="language"
                      list={dictionary}
                      value={this.state.language}
                      onChange={this.handleInput} />
          </div>
          <div>
            {
              this.state.language &&
              <label> choose accent: </label>
            }
            <Dropdown show={this.state.language}
                      name="accent"
                      list={dictionary[this.state.language]}
                      value={this.state.accent}
                      onChange={this.handleInput} />
          </div>
        </div>

        <div className="text-inputs-container">
          {
            this.state.language && 
            this.state.accent && 
            dictionary[this.state.language][this.state.accent] && 
            <textarea name="input"
                      rows="4" 
                      cols="50"
                      placeholder="Text to translate..." 
                      value={this.state.input}
                      onChange={this.handleInput} />
          }
          {
            this.state.language && 
            this.state.accent && 
            dictionary[this.state.language][this.state.accent] && 
            this.state.translation &&
            <textarea name="input"
                      rows="4" 
                      cols="50"
                      value={this.state.translation}
                      readOnly/>
          }
          {
            this.state.language && 
            this.state.accent &&
            dictionary[this.state.language][this.state.accent] && 
            <div>
              <button onClick={this.translate}>Translate</button>
            </div>
          }
        </div>

      </div>
    )
  }
}

// Container:
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

// const mapStateToProps = state => ({

// });

// const mapDispatchToProps = dispatch => bindActionCreators(
//   {

//   },
//     dispatch,
//   );

// export default connect(mapStateToProps, mapDispatchToProps)(Translator);