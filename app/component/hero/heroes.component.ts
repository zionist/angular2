import {Component, OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from '../../service/hero/hero.service';


@Component({
    selector: 'heroes',
    templateUrl: 'app/component/hero/html/app.component.html',
    styleUrls: ['app/component/hero/html/app.component.css'],

    directives: [HeroDetailComponent],
    providers: [HeroService]
})

export class Heroes implements OnInit {
    public title = 'Tour of Heroes';
    public heroes: Hero[];
    public selectedHero: Hero;

    constructor(private _heroService: HeroService) { }

    getHeroes() {
        this._heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    }

    ngOnInit() {
        this.getHeroes();
    }

    onSelect(hero: Hero) { this.selectedHero = hero; }
}
