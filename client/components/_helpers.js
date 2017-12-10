import React from 'react';

export function Dropdown ({show, name, list, value, onChange}) {
  if (!show || !list) {
    return null;
  }
  let array = Array.isArray(list) ? list : Object.keys(list);
  return (
    <select name={name} value={value} onChange={onChange}>
      <option value="">select</option>
      {
        array.map((x, idx) => {
          return <option key={idx} value={x}>{x}</option>
        })
      }
    </select>
  )
}