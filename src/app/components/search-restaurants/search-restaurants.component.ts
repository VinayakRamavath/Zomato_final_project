import { Component, OnInit } from '@angular/core';
import { ZomatoService } from './../../services/zomato.service';
import { trigger, style, state, transition, animate } from '@angular/animations';

import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-search',
  templateUrl: './search-restaurants.component.html',
  styleUrls: ['./search-restaurants.component.css'],
  providers: [ZomatoService],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class SearchRestaurantsComponent implements OnInit {

  lat: number = 12.9716;
  lng: number = 77.5946;

  restaurants:any;

  menuState:string = 'out';

  constructor(private zomato: ZomatoService){
    
  }

  ngOnInit() {
  }

  fetchRestaurants(cityName, cuisineName) {
    this.restaurants=[];
    this.zomato.getRestaurants(cityName, cuisineName).then(
      (data)=> {
          this.restaurants = data;
          console.log(this.restaurants);
      });
  }
  
  
    toggleMenu() {
      // 1-line if statement that toggles the value:
      this.menuState = this.menuState === 'out' ? 'in' : 'out';
    }

}