import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-container',
  template: `
    <mat-toolbar class="title" color="primary" role="heading">
      <span>待办事项</span>
    </mat-toolbar>
    <app-todo-index></app-todo-index>
  `,
  styles: []
})
export class TodoContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
