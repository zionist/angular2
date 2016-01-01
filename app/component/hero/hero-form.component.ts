import {Component,Input} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {HeroInterface,Hero} from './hero';
import {HeroService} from '../../service/hero/hero.service';
@Component({
    selector: 'hero-form',
    template: `
<div *ngIf="hero" class="row">
     <div class="col-md-3">
            <h1>Hero Form</h1>
            <form>
              <div> {{diagnostic}}</div>
              <div class="form-group">
                <label for="name"></label>
                <input type="text" class="form-control" required
                [(ngModel)]="hero.name">
              </div>
              <div class="form-group">
                <label for="alterEgo">Alter Ego</label>
                <input type="text" class="form-control" [(ngModel)]="hero.alterEgo">
              </div>
              <div class="form-group">
                 <label for="power">Hero Power</label>
                  <select class="form-control"  required [(ngModel)]="hero.power" >
                    <option *ngFor="#p of powers" [value]="p">{{p}}</option>
                  </select>
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
        </div>
</div>
`
})
export class HeroFormComponent {

    public powers: Array<string>;

    constructor(private _heroService: HeroService) {
    }

    getPowers() {
        this._heroService.getHeroePowers().then(powers => this.powers = powers);
    }

    ngOnInit() {
        this.getPowers();
    }

    @Input('hero') public hero: HeroInterface;

    public submitted: boolean = false;
    onSubmit() {
        this.submitted = true;
    }
    // TODO: Remove this when we're done
    public get diagnostic() { return JSON.stringify(this.hero); }
}
