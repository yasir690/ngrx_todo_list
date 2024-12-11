import { createSelector } from '@ngrx/store';
import { Todo } from '../model/todo.model';

export const selectTodos = (state: any) => state.todos;

export const selectCompletedTodos = createSelector(
  selectTodos,
  (todos: Todo[]) => todos?.filter(todo => todo.completed)
);
