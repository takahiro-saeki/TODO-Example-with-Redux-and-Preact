import 'babel-polyfill';
import { h, render } from 'preact';
import { AppContainer } from 'react-hot-loader';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'preact-redux'
import {
  devToolsEnhancer,
  composeWithDevTools
} from 'redux-devtools-extension';
import App from './containers/App'
import reducer from './reducers';
import 'todomvc-app-css/index.css';
import storage from './domain/storage';

const store = createStore(
  reducer, 
  storage.read() ? { todo: storage.read() } : {}, 
  composeWithDevTools()
)

render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('app')
);
