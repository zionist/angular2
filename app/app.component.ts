import {Component} from 'angular2/core';
import {Heroes} from './component/hero/heroes.component';

@Component({
    selector: 'my-app',
    template: "<heroes></heroes>",
    directives: [Heroes]
})

export class AppComponent {

}