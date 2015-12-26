import {Component, OnInit} from 'angular2/core';
import {Hero} from './component/hero/hero';
import {HeroDetailComponent} from './component/hero/hero-detail.component';
import {HeroService} from './service/hero/hero.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/component/hero/html/app.component.html',
    styleUrls: ['app/component/hero/html/app.component.css'],

    directives: [HeroDetailComponent],
    providers: [HeroService]
})

export class AppComponent implements OnInit {
    public title = 'Tour of Heroes';
    public heroes: Hero[];
    public selectedHero: Hero;

    constructor(private _heroService: HeroService) { }

    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit() {
        this.getHeroes();
    }

    onSelect(hero: Hero) { this.selectedHero = hero; }
}