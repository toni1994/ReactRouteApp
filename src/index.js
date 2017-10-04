import React from 'react';
import ReactDOM from 'react-dom';
//import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';
import { history } from './services';

export const store = configureStore({},history);
const rootElement = document.getElementById('root');

ReactDOM.render(
        <App />
    , rootElement);
registerServiceWorker();
