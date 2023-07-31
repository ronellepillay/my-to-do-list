import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, editTodo, toggleTodo, deleteTodo } from './actions';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const todos = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const handleAddTodo = (event) => {
    event.preventDefault();
    const content = event.target.content.value;
    dispatch(addTodo(content));
    event.target.reset();
  };

  const handleEditTodo = (id, content) => {
    const newContent = prompt('Edit task:', content);
    if (newContent) {
      dispatch(editTodo(id, newContent));
    }
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="app-container">
      <h1 className="mb-4">To-Do Application</h1>
      <form onSubmit={handleAddTodo} className="mb-3">
        <div className="input-group">
          <input type="text" name="content" className="form-control" placeholder="Add a new task" />
          <button type="submit" className="btn btn-primary">Add</button>
        </div>
      </form>
      <ul className="list-group">
        {Object.entries(todos).map(([id, todo]) => (
          <li key={id} className="list-group-item d-flex justify-content-between align-items-center">
            {todo.content}
            <div>
              <button onClick={() => handleEditTodo(id, todo.content)} className="btn btn-sm btn-outline-primary me-2">Edit</button>
              <button onClick={() => handleDeleteTodo(id)} className="btn btn-sm btn-outline-danger me-2">Delete</button>
              <button onClick={() => handleToggleTodo(id)} className={`btn btn-sm ${todo.completed ? 'btn-outline-warning' : 'btn-outline-success'}`}>
                {todo.completed ? 'Undo' : 'Completed'}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
