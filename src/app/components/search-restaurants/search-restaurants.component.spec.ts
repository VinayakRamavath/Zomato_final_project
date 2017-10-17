import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRestaurantsComponent } from './search-restaurants.component';
import { DisplayRestaurantsComponent } from './display-restaurants/display-restaurants.component';
import { UsersService } from '../../services/users.service';
import { ZomatoService } from '../../services/zomato.service';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { NavComponent } from '../nav/nav.component';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('SearchRestaurantsComponent', () => {
  let component: SearchRestaurantsComponent;
  let fixture: ComponentFixture<SearchRestaurantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchRestaurantsComponent,DisplayRestaurantsComponent,NavComponent ],
      providers: [UsersService,ZomatoService],
      imports:[HttpModule,RouterTestingModule,BrowserAnimationsModule,
         ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
