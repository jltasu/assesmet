// const element = document.createElement('h1')
// element.innerText = 'Hello, platzi'

// const container = document.getElementById('app')

// container.appendChild(element)

import React from "react";
import ReactDOM from "react-dom";
import Principal from "./Pages/principal";

const element = <h1>hello platzi badges</h1>;
const container = document.getElementById("app");
// ReactDOM.render(__que__, __donde__)
ReactDOM.render(<Principal />, container);
