import React, {Component} from 'react';
import Todoitem from './Todoitem'
import Proptype from 'prop-types'

class Todos extends Component {

  render(){
  return this.props.todos.map((todo) => (
  <Todoitem key ={todo.id} todo ={todo} markComplete={this.props.markComplete} delTodo = {this.props.delTodo}/>
  ) );
}
}

Todos.Proptype = {
    todos: Proptype.array.isRequired
}

export default Todos;