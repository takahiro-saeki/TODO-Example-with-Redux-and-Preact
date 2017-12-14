import { h, Component } from 'preact';
import { arrayOf, object, func } from 'prop-types';
import { isEmpty, upperFirst } from 'lodash';
import Footer from '../Footer';
import TodoItem from '../TodoItem';
import { ALL, ACTIVE, COMPLETED } from '../../constants/FilterTypes';

const DEFAULT_FILTER = [
  { type: upperFirst(ALL) },
  { type: upperFirst(ACTIVE) },
  { type: upperFirst(COMPLETED) }
];

const TODO_FILTERS = {
  [ALL]: () => true,
  [ACTIVE]: todo => !todo.completed,
  [COMPLETED]: todo => todo.completed
};

class Todo extends Component {
  static defaultProps = {
    data: [],
    handleToggleAll: null,
    toggleTodo: null,
    deleteTodo: null,
    clearTodo: null,
    editTodo: null
  };

  static propTypes = {
    data: arrayOf(object),
    handleToggleAll: func,
    toggleTodo: func,
    deleteTodo: func,
    clearTodo: func,
    editTodo: func
  };

  state = {
    filter: 'ALL',
    isChecked: false
  };

  componentDidMount() {
    if (isEmpty(location.hash)) {
      return false;
    }
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
    const { data, toggleTodo, deleteTodo, clearTodo, editTodo } = this.props;
    const filterFlag =
      data.filter(item => item.completed === false).length === 0;
    return (
      <section
        style={{ display: data.length === 0 ? 'none' : 'block' }}
        className="main"
      >
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
