import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';


@Injectable()
export class TodoEffects {

  constructor(private actions$: Actions) {}
}
