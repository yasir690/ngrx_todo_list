import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common'; // Import CommonModule for ngFor and ngClass
import { selectCompletedTodos, selectTodos } from '../selectors/todo.selector';
import { Todo } from '../model/todo.model';
import { addTodo, removeTodo, toggleTodo } from '../actions/todo.action';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule], // Ensure CommonModule is imported
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  todos$: any;  // Declare the observable
  completedTodos$: any;  // Declare the observable

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.todos$ = this.store.select(selectTodos);  // Initialize the observable
    this.completedTodos$ = this.store.select(selectCompletedTodos);  // Initialize the observable
  }

  addTodo(title: string) {
    const newTodo: Todo = {
      id: Date.now(),
      title,
      completed: false,
    };
    this.store.dispatch(addTodo({ todo: newTodo }));
  }

  toggleTodo(id: number) {
    this.store.dispatch(toggleTodo({ id }));
  }

  removeTodo(id: number) {
    this.store.dispatch(removeTodo({ id }));
  }
}
