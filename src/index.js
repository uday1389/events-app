import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "mobx-react";
import EventStore from './stores/EventStore'
import {BrowserRouter} from 'react-router-dom'

const Root=(
    <Provider EventStore={EventStore}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(Root, document.getElementById('root'));


serviceWorker.unregister();
