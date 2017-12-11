import 'babel-polyfill';
import { h, render } from 'preact';
import { AppContainer } from 'react-hot-loader';
import { createStore } from 'redux'
import { Provider } from 'preact-redux'
import App from './containers/App'
import reducer from './reducers';
import 'todomvc-app-css/index.css';

document.body.style.margin = 0;

const store = createStore(reducer)

render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('app')
);
