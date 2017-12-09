import React from 'react';

export function Dropdown (props) {
  if (!props.show || !props.list) {
    return null;
  }
  const list = Array.isArray(props.list) ? props.list : Object.keys(props.list);
  return (
    <select disabled={props.disabeld} name={props.name} value={props.value} onChange={props.onChange}>
      <option value="">select</option>
      {
        list.map((x, idx) => {
          return <option key={idx} value={x}>{x}</option>
        })
      }
    </select>
  )
}