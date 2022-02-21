import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {MyContextProvider} from "./MyContext";

ReactDOM.render(
    <MyContextProvider>
        <App/>
    </MyContextProvider>,
    document.getElementById('root')
);
