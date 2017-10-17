import { Component, OnInit, Input } from '@angular/core';
import { DisplayRestaurantsComponent } from '../components/search-restaurants/display-restaurants/display-restaurants.component';
import { ZomatoService } from '../services/zomato.service';
import { ActivatedRoute, Params } from '@angular/router';

import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-detailed-restaurant',
  templateUrl: './detailed-restaurant.component.html',
  styleUrls: ['./detailed-restaurant.component.css']
})
export class DetailedRestaurantComponent implements OnInit {
  @Input() restaurant:any;
  constructor(private zomato: ZomatoService,
    private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    
    this.route.params
    .switchMap((params: Params) => this.zomato.getRestaurantDetail(params.id))
    .subscribe((data) => {
      this.restaurant = data;
      console.log(this.restaurant);
    });
  }

  // fetchRestaurantDetail(resId:number) {
  //   console.log(resId);
  //       this.zomato.getRestaurantDetail(resId).then(
  //         (data)=> {
  //             this.restaurantdata = data;
  //             console.log("json"+this.restaurantdata);
  //         });
  //     }

}
