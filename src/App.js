import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/pages/About';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Todos from './components/Todos';
import Header from './components/Layout/Header';
import Addtodo from './components/Addtodo';



class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'Tirar o lixo',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Alimentar o gato',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Estudar programação',
        completed: false
      },
    ]
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  }
  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path='/' render={props => (
            <React.Fragment>
              <Addtodo addTodo={this.addTodo} />
              <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
            </React.Fragment>
          )}></Route>
          <Route path= '/about' component={About}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
