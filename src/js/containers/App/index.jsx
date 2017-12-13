import { h } from 'preact';
import { bindActionCreators } from 'redux'
import { connect } from 'preact-redux'
import Header from '../../components/Header';
import Todo from '../../components/Todo';
import * as actions from '../../actions';

const App = ({todo, addTodo, handleToggleAll, toggleTodo, deleteTodo, clearTodo}) => (
  <div>
    <section className="todoapp">
      <Header title="Preact TODO" placeholder="what is your task?" addTodo={addTodo}/>
      <Todo 
        data={todo} 
        handleToggleAll={handleToggleAll} 
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        clearTodo={clearTodo}
      />
    </section>
  </div>
)

const mapStateToProps = state => ({
  todo: state.todo
})

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App)
