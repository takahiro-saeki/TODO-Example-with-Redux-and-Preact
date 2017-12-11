import { h, Component } from 'preact';
import { bindActionCreators } from 'redux'
import { connect } from 'preact-redux'
import * as actions from '../../actions';
import { isEmpty } from 'lodash';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }
  
  handleSubmit = e => {
    const text = e.target.value.trim()
    if (e.which === 13) {
      this.props.addTodo(e.target.value)
      this.setState(state => ({ text: '' }))
      return 
    }
    this.setState({ text: e.target.value })
  }
  
  render() {
    const { title, placeholder, addTodo } = this.props;
    return (
      <header className="header">
        <h1>{title}</h1>
        <input 
          className="new-todo" 
          placeholder={placeholder} 
          autofocus="" 
          onKeyDown={this.handleSubmit}
          value={this.state.text}
        />
      </header>
    )
  }
}