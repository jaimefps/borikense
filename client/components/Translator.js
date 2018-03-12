import React from 'react';
import { Header, DropWithLabel, DivText, Button } from './_helpers';
import translate from '../../lib/filters/_apply';
import dictionary from '../../lib/dictionary';

export default class Translator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      translation: "",
      language: "",
      accent: "",
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
      <div>
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
          backgroundColor="lightyellow"
          readOnly
        />
      )
    }
  }

  textFields () {
    return (
      <div style={{textAlign: 'center'}}>
        { this.userInputText() }
        { this.translatedText() }
        <Button
          state={this.state} 
          dictionary={dictionary} 
          translate={this.translate} 
        />
      </div>
    )
  }

  render () {
    return (
      <div>
        <Header text="Accent Translator"/>
        { this.selectors() }
        { this.textFields() }
      </div>
    )
  }
}
