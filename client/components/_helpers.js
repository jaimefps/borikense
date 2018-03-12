import React from 'react';

export const Header = ({ text }) => {
  const style = {
    backgroundColor: "lightgreen",
    textAlign: "center",
    color: 'white',
    padding: "16px 0px",
  };
  return (
    <div style={style}>
      <h1> {text.toUpperCase()} </h1>
    </div>
  )
};

export const Dropdown = ({ name, options, value, onChange }) => {
  const opts = Array.isArray(options) ? options : Object.keys(options);
  return (
    <select name={name} value={value} onChange={onChange}>
      <option value="">select</option>
      {
        opts.map((x, idx) => {
          return <option key={idx} value={x}>{x}</option>
        })
      }
    </select>
  )
};

export const DropWithLabel = ({ name, options, value, onChange, label, backgroundColor }) => {
  const style = {
    textAlign:"center",
    padding: "8px 0px",
    backgroundColor: backgroundColor,
  };
  const labelStyle = {
    color:'white'
  };
  const commons = { name, options, value, onChange };
  return (
    <div style={style}>
      <div>
        <label style={labelStyle}>{label}</label>
      </div>
      <Dropdown { ...commons } />
    </div>
  )
};

export const TextInput = ({ name, rows, cols, placeholder, value, onChange, readOnly, backgroundColor }) => {
  const style = {
    minWidth: "50%",
    maxWidth: "75%",
    backgroundColor: backgroundColor,
    border:'none',
    fontSize: "14px",
  }
  return (
    <textarea
      name={name}
      rows={10}
      cols={60}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      readOnly={readOnly}
      style={style}
    />
  )
};

export const DivText = (props) => {
  const style = {
    paddingTop: '15px',
  };
  return (
    <div style={style}>
      <TextInput { ...props } />
    </div>
  )
};

export const Button = ({ state, dictionary, translate }) => {
  const show = state.language !== "" && 
               state.accent !== "" &&
               typeof dictionary[state.language][state.accent] != "undefined";
  const buttonStyle = {
    padding: "8px 0px",
    backgroundColor: 'red',
    width: '30%',
    cursor: 'pointer',
    fontSize: '15px',
    fontWeight: 'bold',
    color: 'white',
    marginTop:'10px'
  };
  if (show) {
    return <button style={buttonStyle} onClick={translate}> TRANSLATE </button>
  }
  return null;
};