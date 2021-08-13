import React from "react";
import ReactDOM from "react-dom";
const pinkStyle = {
  color: "pink",
  fontSize: "20px",
  border: "1px solid black"
};

// We can actually modify this here
pinkStyle.color = "magenta";

ReactDOM.render(
  <h1 style={pinkStyle}>Hello World!</h1>,
  document.getElementById("root")
);
