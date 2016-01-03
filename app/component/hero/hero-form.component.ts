import {Component,Input} from 'angular2/core';
import {NgForm,Validators,FormBuilder,ControlGroup,AbstractControl,Control}    from 'angular2/common';
import {HeroInterface} from './hero';
import {HeroService} from '../../service/hero/hero.service';
@Component({
    selector: 'hero-form',
    styles: [`
    .ng-valid[required] {
      border-left: 5px solid #42A948; /* green */
    }

    .ng-invalid {
      border-left: 5px solid #a94442; /* red */
    }`],
    template: `
<div *ngIf="hero" class="row">

    <div [hidden]="!hero.submitted">
      <h2>You submitted the following:</h2>
      <div class="row">
        <div class="col-xs-3">Name</div>
        <div class="col-xs-9  pull-left">{{ hero.name }}</div>
      </div>
      <div class="row">
        <div class="col-xs-3">Alter Ego</div>
        <div class="col-xs-9 pull-left">{{ hero.alterEgo }}</div>
      </div>
      <div class="row">
        <div class="col-xs-3">Power</div>
        <div class="col-xs-9 pull-left">{{ hero.power }}</div>
      </div>
      <br>
      <button class="btn btn-default" (click)="hero.submitted=false">Edit</button>
    </div>

     <div class="col-md-3">
         <div [class.hidden]="hero.submitted">
            <h1>Hero Form</h1>
            <form  [ngFormModel]="heroForm" (ngSubmit)="onSubmit()">
              <div> {{diagnostic}}</div>
              <div class="form-group">
                <label for="name"></label>
                <input type="text" class="form-control" required
                [(ngModel)]="hero.name" ngControl="name">
                  <div [class.hidden]="!name.hasError('required')" class="alert alert-danger">
                  Name is required
                  </div>
                  <div [class.hidden]="!name.hasError('noMagic')" class="alert alert-danger">
                  Must not contains "test" word
                  </div>
              </div>
              <div class="form-group">
                <label for="alterEgo">Alter Ego</label>
                <input type="text" class="form-control" [(ngModel)]="hero.alterEgo" ngControl="alterEgo">
              </div>
              <div class="form-group">
                 <label for="power">Hero Power</label>
                  <select class="form-control"  required [(ngModel)]="hero.power" ngControl="power">
                    <option *ngFor="#p of powers" [value]="p">{{p}}</option>
                  </select>
              </div>
              <button type="submit" class="btn btn-default" [class.disabled]="!heroForm.valid">Submit</button>
            </form>
         <div>
     </div>
</div>
`
})


export class HeroFormComponent {

    public powers: Array<string>;
    public heroForm: ControlGroup;
    public name: AbstractControl;
    public power: AbstractControl;
    public alterEgo: AbstractControl;

    //constructor(private _heroService: HeroService) {
    //}
    constructor(private _heroService: HeroService, fb: FormBuilder) {

        function containsMagicWord(c: Control) {
            if(c.value.indexOf('test') >= 0) {
                return {
                    noMagic: true
                }
            }

            // Null means valid, believe it or not
            return null
        }

        this.heroForm = fb.group({
            "name": ["",  Validators.compose([Validators.required, containsMagicWord])],
            "power": ["", Validators.required],
            "alterEgo": [""],
        });

        this.name = this.heroForm.controls["name"];
    }

    getPowers() {
        this._heroService.getHeroePowers().then(powers => this.powers = powers);
    }

    ngOnInit() {
        this.getPowers();
    }

    @Input('hero') public hero: HeroInterface;

    onSubmit() {
        this.hero.submitted = true;
    }

    // TODO: Remove this when we're done
    public get diagnostic() { return JSON.stringify(this.hero); }
}
