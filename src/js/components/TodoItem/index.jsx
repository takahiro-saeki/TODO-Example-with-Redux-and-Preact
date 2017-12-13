import { h, Component } from 'preact';

export default class TodoItem extends Component {
  state = {
    isEdit: false
  }
  
  changeEdit = () => {
    this.setState(state => ({isEdit: !state.isEdit}))
  }
  
  isEnter = e => {
    if(e.which === 13) {
      this.changeEdit()
    } 
  }
  
  componentDidUpdate() {
    if(this.state.isEdit === true) {
      this.textInput.focus()
    }
  }
  
  render() {
    const { data, deleteTodo, toggleTodo } = this.props;
    const { isEdit } = this.state;
    if(isEdit) {
      return (
        <li 
          id={data.id} 
          className="editing"
        >
          <input 
            ref={node => this.textInput = node}
            type="text"
            className="edit" 
            onBlur={this.changeEdit}
            onKeyDown={this.isEnter}
          />
        </li>
      )
    }
    return (
      <li id={data.id} className={data.completed ? 'completed' : null }>
        <input 
          className="toggle" 
          type="checkbox" 
          onClick={() => toggleTodo(data)} 
          checked={data.completed}
        />
        <label onDblClick={this.changeEdit}>{data.text}</label>
        <button className="destroy" onClick={() => deleteTodo(data)} />
      </li>
    )
  }
}
