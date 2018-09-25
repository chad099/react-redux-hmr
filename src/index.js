import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import ApiClient from './helpers/ApiClient';
import createStore from './store/create';
import createHistory from 'history/createBrowserHistory';
import Main from "./routes/routes";
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';

const client = new ApiClient();
const history = createHistory();
const store = createStore(history, client, window.__INITIAL_STATE__);

ReactDOM.render(<Provider store={store}><AppContainer><BrowserRouter><Main /></BrowserRouter></AppContainer></Provider>, document.getElementById("root"));
