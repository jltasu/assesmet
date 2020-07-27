import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from 'react-router-dom'
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

const app = (
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
)
const container = document.getElementById("root");
// ReactDOM.render(__que__, __donde__)
ReactDOM.render(app, container);
