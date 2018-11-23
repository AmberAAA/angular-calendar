import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './component/index.component';
import { TodoContainerComponent } from './todo-container.component';
import {TodoRoutingModule} from './todo-routing.module';
import {MatToolbarModule} from '@angular/material';
import {StoreModule} from '@ngrx/store';
import { reducer } from './todo.reducer';

@NgModule({
  declarations: [IndexComponent, TodoContainerComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    MatToolbarModule,
    StoreModule.forFeature('todo', reducer)
  ]
})
export class TodoModule { }
