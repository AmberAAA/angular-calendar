import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-container',
  template: `
    <mat-toolbar class="title" color="primary" role="heading">
      <span>Login</span>
    </mat-toolbar>
    <app-my-login></app-my-login>
  `,
  styles: []
})
export class AuthContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
