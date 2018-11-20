import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {select, Store} from '@ngrx/store';
import {AuthActionTypes, Login, SignUp} from '../../auth.actions';
import {Observable, Observer} from 'rxjs';
import {Certificate} from '../../modules/auth';
import { State, selectCertificate, my } from '../../auth.reducer';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

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

  // authForm = new FormGroup({
  //   eamil:
  // });

  passwdFormControl = new FormControl('', [
    Validators.required,
    Validators.max(3),
  ]);

  matcher = new MyErrorStateMatcher();

  login () {
    this.store.dispatch(new Login({email: this.emailFormControl.value, passwd: this.passwdFormControl.value}));
  }

  signUp () {
    this.store.dispatch(new SignUp({email: this.emailFormControl.value, passwd: this.passwdFormControl.value}));
    // this.http.post('http://anborong.live:9000/api/login', {email: this.emailFormControl.value, passwd: this.passwdFormControl.value})
    // .subscribe(e => {console.log(e)} );
  }

  constructor(public store: Store<State>,
              private http: HttpClient) {
    this.certificate$ = this.store.pipe(
      my
    );
    this.certificate$.subscribe(e => {
      console.log(e);
    });
  }

  ngOnInit() {
  }

}

