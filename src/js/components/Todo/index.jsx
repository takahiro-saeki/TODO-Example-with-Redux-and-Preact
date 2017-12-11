import { h, Component } from "preact";
import { bindActionCreators } from 'redux'
import { connect } from 'preact-redux'
import * as actions from '../../actions';
import Footer from '../Footer';
import TodoItem from '../TodoItem';

const TODO_FILTERS = {
  ['ALL']: () => true,
  ['ACTIVE']: todo => !todo.completed,
  ['COMPLETED']: todo => todo.completed
}

class Todo extends Component {
  render() {
    const { filter } = this.state;
    const { data, todoFilter, filterChange } = this.props;
    const calc = todoFilter.filter(item => item)
    console.log(calc)
    return (
      <section style="display: block;" class="main">
        <input class="toggle-all" type="checkbox" />
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
          {data.filter(TODO_FILTERS[calc[0].type]).map(item => <TodoItem data={item} />)}
        </ul>
        <Footer todoFilter={todoFilter} filterChange={filterChange}/>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  todoFilter: state.todoFilter
})

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Todo)