import { Component, OnInit } from 'angular2/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

import { Router } from 'angular2/router';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];
    errorMessage: string;

    ngOnInit() {
        this._heroService.getHeroes()
                 .subscribe(
                   heroes => this.heroes = heroes.slice(1,5),
                   error =>  this.errorMessage = <any>error);
    }
    gotoDetail(hero: Hero) {
        let link = ['HeroDetail', { id: hero.id }];
        this._router.navigate(link);
    }
    constructor(
        private _router: Router,
        private _heroService: HeroService) {
    }
}