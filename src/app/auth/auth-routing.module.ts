import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthContainerComponent } from './auth-container.component';
import {DemoComponent} from './component/demo/demo.component';


const routes: Routes = [
  {path: 'login', component: AuthContainerComponent},
  {path: 'login/demo', component: DemoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
