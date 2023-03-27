import React from 'react';
import ReactDOM from "react-dom/client";
import App  from "./HelloWordApp";
import {FirstApp} from "./FirstApp";
import { CounterApp } from './CounterApp'
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp number={ 50 } />
        {/* <FirstApp title="Soy un titulo" /> */}
    </React.StrictMode>
)