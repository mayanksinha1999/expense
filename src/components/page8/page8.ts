import { Component } from '@angular/core';

/**
 * Generated class for the Page8Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'page8',
  templateUrl: 'page8.html'
})
export class Page8Component {

  text: string;

  constructor() {
    console.log('Hello Page8Component Component');
    this.text = 'Hello World';
  }

}
