import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ZomatoService } from "./services/zomato.service";
import { SearchRestaurantsComponent } from "./components/search-restaurants/search-restaurants.component";
import { AppRoutingModule } from "./app-routing.module";
import { DisplayRestaurantsComponent } from "./components/search-restaurants/display-restaurants/display-restaurants.component";
import { HttpModule } from "@angular/http";
import { NavComponent } from "./components/nav/nav.component";
import { FavouriteRestaurantsComponent } from './components/favourite-restaurants/favourite-restaurants.component';
import { UsersService } from './services/users.service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { DetailedRestaurantComponent } from './detailed-restaurant/detailed-restaurant.component';
@NgModule({
  declarations: [
    AppComponent,
    SearchRestaurantsComponent,
    DisplayRestaurantsComponent,
    NavComponent,
    FavouriteRestaurantsComponent,
    DetailedRestaurantComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAvFkkG9vJoUnNAeaoKsC3aL1UogujYS8I'
    })
  ],
  providers: [ZomatoService,UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
