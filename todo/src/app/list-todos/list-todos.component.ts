import { Component, OnInit } from '@angular/core';

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
  todos = [
    new Todo(1, 'Learn to Dance', false, new Date()),
    new Todo(
      2,
      'Learn to Integrate Spring Boot and Angular',
      false,
      new Date()
    ),
    new Todo(3, 'Learn to Be a Best Developer', false, new Date()),
    new Todo(4, 'Learn to Implement Spring Security', false, new Date()),
    // { id: 1, description: 'Learn to Dance' },
    // { id: 2, description: 'Learn to Integrate Spring Boot and Angular' },
    // { id: 3, description: 'Learn to Be a Good Citizen' },
    // { id: 4, description: 'Learn to Mingle with Right People' },
  ];

  // todo = {
  //   id: 1,
  //   description: 'Learn to Dance',
  // };

  constructor() {}

  ngOnInit(): void {}
}
