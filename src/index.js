import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Router } from 'react-router-dom'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';
import { history } from './services';
import { ConnectedRouter } from 'react-router-redux';
import Routes from './routes';

export const store = configureStore({},history);
//const _history = syncHistoryWithStore(history, store);

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter  
        history={history}
        routes={Routes}>
            <App />
        </ConnectedRouter>
    </Provider>
    , rootElement);
registerServiceWorker();
