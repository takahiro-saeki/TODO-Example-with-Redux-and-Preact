import 'babel-polyfill';
import { h, render } from 'preact';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'preact-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import 'todomvc-app-css/index.css';
import App from './containers/App'
import reducer from './reducers';
import storage from './domain/storage';

const store = createStore(
  reducer, 
  storage.read() ? { todo: storage.read() } : {}, 
  process.env.NODE_ENV === 'production' ? undefined : composeWithDevTools()
)

render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('app')
);
