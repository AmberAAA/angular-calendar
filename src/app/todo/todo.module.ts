import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './component/index.component';
import { TodoContainerComponent } from './todo-container.component';
import {TodoRoutingModule} from './todo-routing.module';
import {MatToolbarModule} from '@angular/material';

@NgModule({
  declarations: [IndexComponent, TodoContainerComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    MatToolbarModule
  ]
})
export class TodoModule { }
