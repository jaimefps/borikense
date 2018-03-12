import React from 'react';
import { Header, DropWithLabel, DivText } from './_helpers';
import translate from '../../lib/filters/_apply';
import dictionary from '../../lib/dictionary';

export default class Translator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      translation: "",
      language: "spanish",
      accent: "borikense",
    }
    this.translate = this.translate.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  translate () {
    const accent = dictionary[this.state.language][this.state.accent];
    const translation = translate(this.state.input, accent);
    this.setState({ translation }, () => console.log('@trans:', translation));
  }
  handleInput (e) {
    this.setState({ 
      [e.target.name]: e.target.value,
    });
  }
  chooseLang () {
    return (
        <DropWithLabel
          label="CHOOSE LANGUAGE"
          name="language"
          options={dictionary}
          value={this.state.language}
          onChange={this.handleInput}
          backgroundColor="pink"
        />
    )
  }
  chooseAccent () {
    if (this.state.language.length > 0) {
      return (
          <DropWithLabel
            label="CHOOSE ACCENT"
            name="accent"
            options={dictionary[this.state.language]}
            value={this.state.accent}
            onChange={this.handleInput}
            backgroundColor="lightblue"
          />
      )
    }
  }
  selectors () {
    return (
      <div style={{}}>
        { this.chooseLang() }
        { this.chooseAccent() }
      </div>
    )
  }
  userInputText () {
    const show = this.state.language !== "" && 
                 this.state.accent !== "" && 
                 typeof dictionary[this.state.language][this.state.accent] != "undefined";
    if (show) {
      return (
        <DivText
          name="input"
          placeholder="Text to translate..." 
          value={this.state.input}
          onChange={this.handleInput}
        />
      )
    }
  }
  translatedText () {
    const show = this.state.language !== "" && 
                 this.state.accent !== "" && 
                 typeof dictionary[this.state.language][this.state.accent] !== "undefined" && 
                 this.state.translation !== "";
    if (show) {
      return (
        <DivText
          key={this.state.translation}
          value={this.state.translation}
          readOnly
        />
      )
    }
  }
  transButton () {
    const show = this.state.language !== "" && 
                 this.state.accent !== "" &&
                 typeof dictionary[this.state.language][this.state.accent] != "undefined";
    const buttonStyle = {
      padding: "8px 0px",
      backgroundColor: 'red',
      width: '30%',
      cursor: 'pointer',
      fontSize: '15px',
      fontWeight: 'bold',
      color: 'white'
    };
    if (show) {
      return <button style={buttonStyle} onClick={this.translate}> TRANSLATE </button>
    }
  }
  textFields () {
    const style = {
      textAlign: 'center',
    }
    return (
      <div style={style} className="text-inputs-container">
        { this.userInputText() }
        { this.translatedText() }
        { this.transButton() }
      </div>
    )
  }
  render () {
    return (
      <div style={{margin: '0px'}}>
        <Header text="Accent Translator"/>
        { this.selectors() }
        { this.textFields() }
      </div>
    )
  }
}
