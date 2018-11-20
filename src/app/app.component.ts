import {Component, OnInit} from '@angular/core';
import {fromEvent, interval, Observable, Observer, timer} from 'rxjs';
import {count, map, scan, throttleTime} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-calendar';

  count_1: number;

  ngOnInit(): void {
    /* STEP: 1 */
    const button = document.querySelector('#button_1');
    fromEvent(button, 'click')
      .pipe( scan(count => count + 1, 0) )
      .subscribe((count) => console.log(`click ${count} times`))

    /* STEP: 2 */
    fromEvent(document.querySelector('#button_2'), 'click')
      .pipe(
        throttleTime(1000),
        map(e => event.clientX),
        scan((count, X) => count + X, 0)
      )
      .subscribe((count) => console.log(`click ${count} pt`));

    /* STEP: 3 */
    // const Timer = new Observable((observe: Observer<T>) => {
    //   let index = 0;
    //   const id = setInterval(() => {
    //     observe.next( ++index );
    //   }, 1000);
    //   return () => clearInterval(id);
    // });

    // ! 使用interval可以达成一致的效果
    const Timer = interval(1000);

    const timer = Timer.subscribe((e) => {
      console.log(e);
    });

    setTimeout(() => { timer.unsubscribe(); }, 4000);




  }

  constructor () {
  }
}
