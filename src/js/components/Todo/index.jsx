import { h, Component } from 'preact';
import Footer from '../Footer';
import TodoItem from '../TodoItem';

const DEFAULT_FILTER = [
  { type: 'All' },
  { type: 'Active' },
  { type: 'Completed' }
];

const TODO_FILTERS = {
  ['ALL']: () => true,
  ['ACTIVE']: todo => !todo.completed,
  ['COMPLETED']: todo => todo.completed
};

class Todo extends Component {
  state = {
    filter: 'ALL',
    isChecked: false
  };

  componentDidMount() {
    const url = location.hash.split('/')[1].toUpperCase();
    this.setState({ filter: url });
  }

  handleChange = (type = 'ALL') => {
    this.setState({ filter: type });
  };

  handleChecked = () => {
    this.setState(state => {
      const flag = !state.isChecked;
      this.props.handleToggleAll(flag);
      const changeCheckBox = { isChecked: flag };
      return changeCheckBox;
    });
  };

  render() {
    const { filter, isChecked } = this.state;
    const {
      data,
      todoFilter,
      toggleTodo,
      deleteTodo,
      clearTodo,
      editTodo
    } = this.props;
    const filterFlag =
      data.filter(item => item.completed === false).length === 0;
    return (
      <section style="display: block;" className="main">
        <input className="toggle-all" type="checkbox" checked={filterFlag} />
        <label htmlFor="toggle-all" onClick={this.handleChecked}>
          Mark all as complete
        </label>
        <ul className="todo-list">
          {data
            .filter(TODO_FILTERS[filter])
            .map(item => (
              <TodoItem
                data={item}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
              />
            ))}
        </ul>
        <Footer
          todoFilter={DEFAULT_FILTER}
          filterChange={this.handleChange}
          currentType={filter}
          clearTodo={clearTodo}
          data={data}
        />
      </section>
    );
  }
}

export default Todo;
