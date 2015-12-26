import {Hero} from '../../component/hero/hero';
import {HEROES} from './mock-heroes';
import {Injectable} from 'angular2/core'

@Injectable()
export class HeroService {

    getHeroes():Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    // See the "Take it slow" appendix
    getHeroesSlowly():Promise<Hero[]> {
        return new Promise((resolve) =>
            setTimeout(()=>resolve(HEROES), 2000) // 2 seconds
        );
    }
}
