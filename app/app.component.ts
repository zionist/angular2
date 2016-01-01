import {Component} from 'angular2/core';
import {Heroes} from './component/hero/heroes.component';

@Component({
    selector: 'my-app',
    template: `
    <div class="container">
    <heroes></heroes>
    </div>

    `,
    directives: [Heroes]
})

export class AppComponent {

}