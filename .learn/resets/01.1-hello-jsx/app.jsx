import React from "react";
import ReactDOM from "react-dom";

// if we have a variable
<span>James is <strong>12</strong> years old</span>

// we can use it in our html like this
let output = <span>James is {age} years old</span>;

// use react-dom to render it
ReactDOM.render(output, document.querySelector("#myDiv"));
