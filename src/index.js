import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, } from 'react-router-dom'
import App from './App';

const app = (
    <HashRouter>
        <App />
    </HashRouter>
)
const container = document.getElementById("root");
// ReactDOM.render(__que__, __donde__)
ReactDOM.render(app, container);
