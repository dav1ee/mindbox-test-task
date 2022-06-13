import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'First todo', isCompleted: false },
    { id: 2, text: 'Second todo', isCompleted: true },
  ]);
  const activeTodos = todos.filter((t) => !t.isCompleted);
  const completedTodos = todos.filter((t) => t.isCompleted);

  const addTodo = (todo) => setTodos([...todos, todo]);

  const completeTodo = (id) => {
    setTodos(
      [...todos],
      todos.filter((todo) => (todo.id === id ? (todo.isCompleted = true) : todos)),
    );
  };

  const clearCompleted = () => {
    const uncompletedOnly = todos.filter((t) => !t.isCompleted);
    setTodos(uncompletedOnly);
  };

  return (
    <div className="app">
      <TodoInput addTodo={addTodo} />
      {todos.length ? (
        <>
          <Routes>
            <Route path="/" element={<TodoList todos={todos} completeTodo={completeTodo} />} />
            <Route
              path="/active"
              element={<TodoList todos={activeTodos} completeTodo={completeTodo} />}
            />
            <Route path="/completed" element={<TodoList todos={completedTodos} />} />
          </Routes>
          <Footer todos={todos} clearCompleted={clearCompleted} />
        </>
      ) : (
        <h3 className="empty">You have no todos yet</h3>
      )}
    </div>
  );
}

export default App;
