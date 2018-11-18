import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {Increment, Decrement, Reset, Login} from '../store/actions';
import { ServeService } from '../serve.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-my-login',
  templateUrl: './my-login.component.html',
  styleUrls: ['./my-login.component.scss']
})
export class MyLoginComponent implements OnInit {

  store$: Observable<number>;


  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwdFormControl = new FormControl('', [
    Validators.required,
    Validators.max(3),
  ]);

  matcher = new MyErrorStateMatcher();

  login () {
    // // // console.log(this.emailFormControl);
    // // if ( this.emailFormControl.invalid ) {
    // //   // this.emailFormControl
    // //   // TODO: 使表单获取焦点
    // //   return false;
    // // }
    // //
    // // if ( this.passwdFormControl.invalid ) {
    // //   // TODO: 使表单获取焦点
    // //   return false;
    // // }
    //
    // // this.store.dispatch(new Login({email: this.emailFormControl.value, passwd: this.passwdFormControl.value }));
    // this.server.login({email: this.emailFormControl.value, passwd: this.passwdFormControl.value }).subscribe(e => {console.log(e)});
  }

  constructor(private store: Store<{ count: number}>,
              private server: ServeService) {
    this.store$ = this.store.pipe(select('store'));
    this.reset();
    // this.store.dispatch(new Login({passwd: `1234`, email: `qe-d@163.com`}));
    // this.increment();
    // console.log(this.store);
  }

  ngOnInit() {
  }

  increment() {
    this.store.dispatch(new Increment());
  }

  decrement() {
    this.store.dispatch(new Decrement());
  }

  reset() {
    this.store.dispatch(new Reset());
  }

}

