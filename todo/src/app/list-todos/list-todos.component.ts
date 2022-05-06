import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

/**
 * Future
 *  - No Navigation Menu and Footer
 *  - Formatting - Bootstrap
 *  - No Security for Menus
 *  - Hardcoded Logic in the TodoList and Login Component
 *  - Remaining Functionality - Edit, Delete, Add
 *  - Spring Boot
 *  - Spring Security
 */

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css'],
})
export class ListTodosComponent implements OnInit {
  todos: Todo[] = [];
  message: string = '';
  //  = [
  //   new Todo(1, 'Learn to Dance', false, new Date()),
  //   new Todo(
  //     2,
  //     'Learn to Integrate Spring Boot and Angular',
  //     false,
  //     new Date()
  //   ),
  //   new Todo(3, 'Learn to Be a Best Developer', false, new Date()),
  //   new Todo(4, 'Learn to Implement Spring Security', false, new Date()),
  //   // { id: 1, description: 'Learn to Dance' },
  //   // { id: 2, description: 'Learn to Integrate Spring Boot and Angular' },
  //   // { id: 3, description: 'Learn to Be a Good Citizen' },
  //   // { id: 4, description: 'Learn to Mingle with Right People' },
  // ];
  // todo = {
  //   id: 1,
  //   description: 'Learn to Dance',
  // };

  //  = [
  //   new Todo(1, 'Learn to Dance', false, new Date()),
  //   new Todo(
  //     2,
  //     'Learn to Integrate Spring Boot and Angular',
  //     false,
  //     new Date()
  //   ),
  //   new Todo(3, 'Learn to Be a Best Developer', false, new Date()),
  //   new Todo(4, 'Learn to Implement Spring Security', false, new Date()),
  //   // { id: 1, description: 'Learn to Dance' },
  //   // { id: 2, description: 'Learn to Integrate Spring Boot and Angular' },
  //   // { id: 3, description: 'Learn to Be a Good Citizen' },
  //   // { id: 4, description: 'Learn to Mingle with Right People' },
  // ];

  // todo = {
  //   id: 1,
  //   description: 'Learn to Dance',
  // };

  constructor(private todoService: TodoDataService, private router: Router) {}

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos('Colin').subscribe((response) => {
      console.log(response);
      this.todos = response;
    });
  }

  deleteTodo(id: any) {
    console.log(`delete todo ${id}`);
    this.todoService.deleteTodo('Colin', id).subscribe((response) => {
      console.log(response);
      this.message = `Delete of Todo ${id} Successful!`;
      this.refreshTodos();
    });
  }

  updateTodo(id: any) {
    console.log(`update ${id}`);
    this.router.navigate(['todos', id]);
  }

  addTodo() {
    this.router.navigate(['todos', -1]);
  }
}
