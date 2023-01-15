import React, { Component } from 'react';
import TodoList from './components/TodoList';
// import ColorPicker from 'components/ColorPicker';
// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'React', completed: 'false' },
      { id: 'id-2', text: 'React', completed: 'false' },
      { id: 'id-3', text: 'React', completed: 'false' },
      { id: 'id-4', text: 'React', completed: 'false' },
    ],
  };

  deletedTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;
    return (
      <>
        {/* <ColorPicker options={colorPickerOptions} /> */}
        <TodoList todos={todos} onDeleteTodo={this.deletedTodo} />
      </>
    );
  }
}

export default App;
