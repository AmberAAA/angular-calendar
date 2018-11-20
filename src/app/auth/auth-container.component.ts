import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-container',
  template: `
    <mat-toolbar class="title" color="primary" role="heading">
      <span>登录/注册</span>
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
