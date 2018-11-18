import { Component } from '@angular/core';
import { MatCard, MatCardHeader} from '@angular/material';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-calendar';

  constructor(
    private http: HttpClient
  ) {
  }
}
