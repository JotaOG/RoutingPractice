import React from "react";

export const Hello = (props) => {
  return isNaN(props.id) ? (
    <div>
      <h1>The word is: {props.id}</h1>
    </div>
  ) : (
    <div>
      <h1>The number is: {props.id}</h1>
    </div>
  );
};
