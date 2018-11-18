import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyLoginComponent } from './view/my-login/my-login.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
