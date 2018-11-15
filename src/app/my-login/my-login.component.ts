import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Increment, Decrement, Reset } from '../store/actions';

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

  count$: Observable<number>;


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
    console.log(this.passwdFormControl.value);
  }

  constructor(private store: Store<{ count: number}>) {
    this.count$ = this.store.pipe(select('count'));
    this.reset();
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

