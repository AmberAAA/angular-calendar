import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {select, Store} from '@ngrx/store';
import {Login} from '../../auth.actions';
import {Observable, Observer} from 'rxjs';
import {Certificate} from '../../modules/auth';
import { State } from '../../auth.reducer';

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

  certificate$: Observable<Certificate>;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwdFormControl = new FormControl('', [
    Validators.required,
    Validators.max(3),
  ]);

  matcher = new MyErrorStateMatcher();

  add () {
    this.store.dispatch(new Login({email: this.emailFormControl.value, passwd: this.passwdFormControl.value}));
  }

  constructor(public store: Store<State>) {
    this.certificate$ = this.store.pipe(
      select('auth', 'certificate'),
    );
    this.certificate$.subscribe(e => {
      console.log(e);
    });
  }

  ngOnInit() {
  }

}

