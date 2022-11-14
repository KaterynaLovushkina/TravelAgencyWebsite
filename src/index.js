import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import { createStore } from 'redux';
import {configureStore} from "@reduxjs/toolkit";
import cartReducer, {getTotals} from './redux/cartSlices'
import store from "./redux/store";
import 'bootstrap/dist/css/bootstrap.css'

store.dispatch(getTotals)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
    </React.StrictMode>
);
