import React, { Component } from 'react';
import TodoApp from './components/TodoApp';
import QuotesApp from './components/QuotesApp';
import './Reset.css';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="container">
        <TodoApp />
        <QuotesApp />
      </div>
    );
  }
}

export default App;
