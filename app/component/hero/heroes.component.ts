import {Component, OnInit} from 'angular2/core';
import {HeroInterface} from './hero';
import {HeroFormComponent} from './hero-form.component';
import {HeroService} from '../../service/hero/hero.service';
import {ROUTER_DIRECTIVES, RouteConfig, RouterOutlet} from "angular2/router";


@Component({
    selector: 'heroes',
    template: `
        <h1>{{title}}</h1>
        <h2>My Heroes</h2>
        <ul class="heroes">
            <li *ngFor="#hero of heroes"
                [class.selected]="hero === selectedHero"
                (click)="onSelect(hero)">
                <span class="badge">{{hero.id}}</span> {{hero.name}}
            </li>

        </ul>
        <hero-form [hero]="selectedHero" (deleted)="onHeroDeleted($event)"></hero-form>
    `,
    styles: [`
    .heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}
    .heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }
    .heroes li:hover {color: #369; background-color: #EEE; left: .2em;}
    .heroes .badge {
        font-size: small;
        color: white;
        padding: 0.1em 0.7em;
        background-color: #369;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -1px;
    }
    .heroes .selected { background-color: #EEE; color: #369; }
    ` ],
    directives: [HeroFormComponent, ROUTER_DIRECTIVES, RouterOutlet],
})
@RouteConfig([
    {path:'/default', name: 'Heroes', component: HeroFormComponent, useAsDefault: true}
])

export class Heroes implements OnInit {
    public title = 'Tour of Heroes';
    public heroes: HeroInterface[];
    public selectedHero: HeroInterface;

    constructor(private _heroService: HeroService) { }

    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit() {
        this.getHeroes();
    }

    public onHeroDeleted(event: Array<string>) {
        //alert(event);
    }

    onSelect(hero: HeroInterface) {
        this.selectedHero = hero;
        //this.selectedHero.submitted = false;
    }
}
