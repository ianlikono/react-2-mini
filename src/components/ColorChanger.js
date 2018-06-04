import React from "react";

export default function ColorChanger(props) {
  return (
    <select
      className="dropDownContainer"
      onChange={event => props.update(event.target.value)}
      disabled={props.allowEdit === "false"}
    >
      <option value="black"> Black </option>
      <option value="blue"> Blue </option>
      <option value="green"> Green </option>
    </select>
  );
}
