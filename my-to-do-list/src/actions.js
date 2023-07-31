// Action creator for adding a new todo
export const addTodo = (content) => ({
  type: 'ADD_TODO', // Action type
  payload: content // Payload containing the todo content
});

// Action creator for editing a todo
export const editTodo = (id, content) => ({
  type: 'EDIT_TODO', // Action type
  payload: { id, content } // Payload containing the todo id and updated content
});

// Action creator for toggling the completion status of a todo
export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO', // Action type
  payload: id // Payload containing the todo id
});

// Action creator for deleting a todo
export const deleteTodo = (id) => ({
  type: 'DELETE_TODO', // Action type
  payload: id // Payload containing the todo id
});
