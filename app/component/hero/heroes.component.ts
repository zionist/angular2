import {Component, OnInit} from 'angular2/core';
import {HeroInterface} from './hero';
import {HeroFormComponent} from './hero-form.component';
import {HeroService} from '../../service/hero/hero.service';


@Component({
    selector: 'heroes',
    templateUrl: 'app/component/hero/html/heroes.component.html',
    styleUrls: ['app/component/hero/html/heroes.component.css'],

    directives: [HeroFormComponent],
    providers: [HeroService]
})

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

    onSelect(hero: HeroInterface) {
        this.selectedHero = hero;
        //this.selectedHero.submitted = false;
    }
}
