import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthContainerComponent } from './auth-container.component';
import { MyLoginComponent } from './component/login/my-login.component';
import { LogoutComponent } from './component/logout/logout.component';
import { AuthRoutingModule } from './auth-routing.module';
import {MatAutocompleteModule, MatButtonModule, MatInputModule, MatToolbarModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MyCardComponent } from '../share/compont/my-card/my-card.component';

@NgModule({
  declarations: [AuthContainerComponent, MyLoginComponent, LogoutComponent, MyCardComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class AuthModule { }
