import {Component} from 'angular2/core';
import {HeroFormComponent} from './component/hero/hero-form.component';
import {Heroes} from './component/hero/heroes.component';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {HeroService} from './service/hero/hero.service';

@RouteConfig([
    {path:'/heroes/...', name: 'Heroes', component: Heroes}
])
@Component({
    selector: 'my-app',
    template: `
    <div class="container">
    <!-- <heroes></heroes> -->
      <h1>Component Router</h1>
      <a [routerLink]="['Heroes']">Heroes</a>
      <router-outlet></router-outlet>
    </div>

    `,
    directives: [Heroes, ROUTER_DIRECTIVES],
    providers: [HeroService]
})
export class AppComponent {

    constructor(private _heroService: HeroService) { }

}