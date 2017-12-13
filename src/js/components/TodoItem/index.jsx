import { h, Component } from 'preact';

export default class TodoItem extends Component {
  state = {
    isEdit: false,
    text: ''
  };

  changeEdit = () => {
    this.setState(state => ({ isEdit: !state.isEdit }));
  };

  isEnter = (e, id) => {
    if (e.which === 13) {
      this.props.editTodo(id, e.target.value);
      return this.changeEdit();
    }
    this.setState({ text: e.target.value });
  };

  componentDidUpdate() {
    if (this.state.isEdit === true) {
      this.textInput.focus();
    }
  }

  render() {
    const { data, deleteTodo, toggleTodo } = this.props;
    const { isEdit } = this.state;
    if (isEdit) {
      return (
        <li id={data.id} className="editing">
          <input
            ref={node => (this.textInput = node)}
            type="text"
            className="edit"
            onBlur={this.changeEdit}
            onKeyDown={e => this.isEnter(e, data.id)}
            value={this.state.text}
          />
        </li>
      );
    }
    return (
      <li id={data.id} className={data.completed ? 'completed' : null}>
        <input
          className="toggle"
          type="checkbox"
          onClick={() => toggleTodo(data)}
          checked={data.completed}
        />
        <label onDblClick={this.changeEdit}>{data.text}</label>
        <button className="destroy" onClick={() => deleteTodo(data)} />
      </li>
    );
  }
}
