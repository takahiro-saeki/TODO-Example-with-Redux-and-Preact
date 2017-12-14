import { h } from 'preact';
import { func, arrayOf, object } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'preact-redux';
import Header from '../../components/Header';
import Todo from '../../components/Todo';
import * as actions from '../../actions';

const App = ({
  todo,
  addTodo,
  handleToggleAll,
  toggleTodo,
  deleteTodo,
  clearTodo,
  editTodo
}) => (
  <div>
    <section className="todoapp">
      <Header
        title="Preact TODO"
        placeholder="what is your task?"
        addTodo={addTodo}
      />
      <Todo
        data={todo}
        handleToggleAll={handleToggleAll}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        clearTodo={clearTodo}
        editTodo={editTodo}
      />
    </section>
  </div>
);

App.defaultProps = {
  todo: [],
  addTodo: null,
  handleToggleAll: null,
  toggleTodo: null,
  deleteTodo: null,
  clearTodo: null,
  editTodo: null
};

App.propTypes = {
  todo: arrayOf(object),
  addTodo: func,
  handleToggleAll: func,
  toggleTodo: func,
  deleteTodo: func,
  clearTodo: func,
  editTodo: func
};

const mapStateToProps = state => ({
  todo: state.todo
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
