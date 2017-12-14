import { h, Component } from 'preact';
import { string, func } from 'prop-types';
import { isEmpty } from 'lodash';
import uuid from 'uuid';

export default class Header extends Component {
  static defaultProps = {
    title: '',
    placeholder: '',
    addTodo: null
  };

  static propTypes = {
    title: string,
    placeholder: string,
    addTodo: func
  };

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  handleSubmit = e => {
    const text = e.target.value.trim();
    if (e.which === 13) {
      this.props.addTodo(e.target.value, uuid.v4());
      this.setState(state => ({ text: '' }));
      return;
    }
    this.setState({ text: e.target.value });
  };

  render() {
    const { title, placeholder } = this.props;
    return (
      <header className="header">
        <h1>{title}</h1>
        <input
          className="new-todo"
          placeholder={placeholder}
          onKeyDown={this.handleSubmit}
          value={this.state.text}
        />
      </header>
    );
  }
}
