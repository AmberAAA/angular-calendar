import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {select, Store} from '@ngrx/store';
import {AuthActionTypes, Login, ResetErrMsg, SignUp} from '../../auth.actions';
import {Observable, Observer} from 'rxjs';
import {Certificate} from '../../modules/auth';
import { State, select_certificate, select_padding, select_errorMsg } from '../../auth.reducer';
import {state, style, transition, trigger, animate} from '@angular/animations';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-my-login',
  templateUrl: './my-login.component.html',
  styleUrls: ['./my-login.component.scss'],
  animations: [
    trigger('showHidden', [
      state('show', style({
        opacity: 1,
        top: 0,
      })),
      state('hidden', style({
        opacity: 0.5,
        top: '-1.5em'
      })),
      transition('hidden => show', [
        animate('0.3s')
      ]),
    ]),
  ]
})
export class MyLoginComponent implements OnInit {

  certificate$: Observable<Certificate>;

  // padding$: Observable<boolean>;

  padding: boolean;

  errorMsg: string;

  authForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    passwd: new FormControl('', [
      Validators.required
    ])
  });

  matcher = new MyErrorStateMatcher();

  login () {
    if (this.authForm.valid) {
      this.store.dispatch(new Login( this.authForm.value ));
    }
  }

  signUp () {
    if (this.authForm.valid) {
      this.store.dispatch(new SignUp( this.authForm.value ));
    }
  }

  constructor(public store: Store<State>) {

    this.certificate$ = this.store.pipe(select_certificate);

    this.store.pipe(select_padding).subscribe(e => this.padding = e);

    this.store.pipe(select_errorMsg).subscribe(e => {
      this.errorMsg = e;
    });



    this.authForm.valueChanges.subscribe(e => {
      if (this.errorMsg) {
        this.store.dispatch(new ResetErrMsg());
      }
    });
  }

  ngOnInit() {
  }

}

