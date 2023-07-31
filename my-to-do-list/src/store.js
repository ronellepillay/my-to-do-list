import { createStore } from 'redux';

// Initial state for the todo list
const initialToDoState = {
  nextId: 2, // Next available ID for new todos
  data: {
    1: {
      content: 'Content 1', // Content of the todo
      completed: false // Completion status of the todo
    }
  }
};

// Reducer function that specifies how the state is updated based on dispatched actions
const todoReducer = (state = initialToDoState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        data: {
          ...state.data,
          [state.nextId]: {
            content: action.payload, // Content of the new todo
            completed: false // New todo is initially not completed
          }
        },
        nextId: state.nextId + 1 // Increment the nextId for future todos
      };
    case 'EDIT_TODO':
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.id]: {
            ...state.data[action.payload.id],
            content: action.payload.content // Updated content of the todo
          }
        }
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload]: {
            ...state.data[action.payload],
            completed: !state.data[action.payload].completed // Toggle the completion status of the todo
          }
        }
      };
    case 'DELETE_TODO':
      const newData = { ...state.data };
      delete newData[action.payload]; // Delete the todo from the data object
      return {
        ...state,
        data: newData // Updated data object without the deleted todo
      };
    default:
      return state; // Return the current state for unknown actions
  }
};

// Create the Redux store with the todoReducer
const store = createStore(todoReducer);

export default store;
