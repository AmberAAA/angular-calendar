import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Observable } from 'rxjs';

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

  constructor() {
  }

  ngOnInit() {
  }

}
