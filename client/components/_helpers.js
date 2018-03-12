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
    color:'grey'
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

export const TextInput = ({ name, rows, cols, placeholder, value, onChange, readOnly }) => {
  return (
    <textarea
      name={name}
      rows={10}
      cols={60}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      readOnly={readOnly}
    />
  )
};

export const DivText = (props) => {
  const style = {
    padding: '15px',
    backgroundColor: props.backgroundColor,
  };
  return (
    <div style={style}>
      <TextInput { ...props } />
    </div>
  )
};