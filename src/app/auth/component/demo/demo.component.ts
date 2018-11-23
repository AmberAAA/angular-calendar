import {Component, OnInit, OnChanges, SimpleChanges, DoCheck} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit, OnChanges, DoCheck {

  inputMsg = '';
  clickMsg = '';
  keyMsg = '';
  demo = '';

  onClick (e: any) {
    this.clickMsg += ' click! ';
  }

  onInput (e: any) {
    this.inputMsg += `${e.target.value}! `;
  }

  keydown (e: KeyboardEvent) {
    this.keyMsg += ` ${(<HTMLInputElement>e.target).value}! `;
  }

  constructor() {
  }


  ngOnInit() {
    console.log('ngOnInit');
  }



  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
    console.log(changes);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

}
