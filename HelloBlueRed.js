import React from "react";

export const HelloBlueRed = (props) => {
  const style = {
    color: props.color1,
    backgroundColor: props.color2,
  };
  return (
    <div style={style}>
      <h1>The word is: {props.id}</h1>
    </div>
  );
};
