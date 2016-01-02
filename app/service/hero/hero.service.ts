import {HeroInterface} from '../../component/hero/hero';
import {HEROES,POWERS} from './mock-heroes';
import {Injectable} from 'angular2/core'

@Injectable()
export class HeroService {

    getHeroes():Promise<HeroInterface[]> {
        return Promise.resolve(HEROES);
    }

    getHeroePowers():Promise<Array<string>> {
        return Promise.resolve(POWERS);
    }

    // See the "Take it slow" appendix
    getHeroesSlowly():Promise<HeroInterface[]> {
        return new Promise((resolve) =>
            setTimeout(()=>resolve(HEROES), 2000) // 2 seconds
        );
    }
}
