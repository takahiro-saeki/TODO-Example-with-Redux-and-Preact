import preact, { render, Component } from "preact";

class Sample extends Component {
  render() {
    return <div>test</div>;
  }
}

render(
  <div id="foo">
    <Sample />
    <span>Hello, world!</span>
    <button onClick={e => alert("hi!")}>Click Me</button>
  </div>,
  document.body
);


import 'babel-polyfill';
import preact, { render, Component } from "preact";
import { AppContainer } from 'react-hot-loader';
import configureStore from 'store/configureStore';

document.body.style.margin = 0;

const store = configureStore();

render(
  <AppContainer>
    <Root store={store} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./Root', () => {
    const RootContainer = require('./Root').default;
    render(
      <AppContainer>
        <App />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}