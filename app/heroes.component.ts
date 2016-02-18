import {Component} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {OnInit} from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
    selector: 'my-heroes',
    templateUrl: 'heroes.component.html',
    styleUrls:  ['heroes.component.css'],
    directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {
    public selectedHero : Hero ;
    public heroes : Hero[];  
    errorMessage: string;
    
    constructor(
        private _router: Router,
        private _heroService: HeroService) { }
    
    ngOnInit() {
        this.getHeroes();
    }
    
    onSelect(hero: Hero) { this.selectedHero = hero; }
    
    getHeroes() {
        this._heroService.getHeroes()
                 .subscribe(
                   heroes => this.heroes = heroes,
                   error =>  this.errorMessage = <any>error);
    }
    
    gotoDetail() {
        this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    }
}