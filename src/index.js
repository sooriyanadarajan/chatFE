import React from "react";
import {createRoot} from "react-dom/client";
import "./Global.css"
import 'bootstrap/dist/css/bootstrap.css';
import {Provider} from "react-redux"
import {store} from "./redux/Store/Store"
import App from "./App";
const rootElement=document.getElementById("root");
const root=createRoot(rootElement);
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
)