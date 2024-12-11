import { createReducer, on } from '@ngrx/store';
import { Todo } from '../model/todo.model';
import { addTodo, removeTodo, toggleTodo } from '../actions/todo.action';

// Define the initial state
export const initialState: Todo[] = [];

// Create the reducer
export const todoReducer = createReducer(
  initialState,
  on(addTodo, (state, { todo }) => [...state, todo]),
  on(toggleTodo, (state, { id }) => 
    state.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  ),
  on(removeTodo, (state, { id }) => state.filter(todo => todo.id !== id))
);
