import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthContainerComponent } from './auth-container.component';
import { MyLoginComponent } from './component/login/my-login.component';
import { LogoutComponent } from './component/logout/logout.component';
import { AuthRoutingModule } from './auth-routing.module';
import {MatAutocompleteModule, MatButtonModule, MatInputModule, MatProgressBarModule, MatToolbarModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MyCardComponent } from '../share/compont/my-card/my-card.component';
import { reducer} from './auth.reducer';
import {StoreModule} from '@ngrx/store';
import { DemoComponent } from './component/demo/demo.component';

@NgModule({
  declarations: [AuthContainerComponent, MyLoginComponent, LogoutComponent, MyCardComponent, DemoComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatProgressBarModule,
    MatInputModule,
    StoreModule.forFeature('auth', reducer)
  ]
})
export class AuthModule { }
