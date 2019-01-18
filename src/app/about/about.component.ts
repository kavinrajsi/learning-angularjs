import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})

export class AboutComponent implements OnInit {

  title: string;
  heroes: any;
  man: any;
  myHero: string;

  constructor() {
    this.title = 'Tour of Heroes';
    this.heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
    this.man = [
      new Hero(1, 'Superman'),
      new Hero(13, 'Batman'),
      new Hero(15, 'Spiderman'),
      new Hero(20, 'Antman')
    ];
    this.myHero = this.heroes[1];
  }

  ngOnInit() {
  }

}
