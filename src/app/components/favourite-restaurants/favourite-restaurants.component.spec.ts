import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteRestaurantsComponent } from './favourite-restaurants.component';
import { NavComponent } from '../nav/nav.component';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('FavouriteRestaurantsComponent', () => {
  let component: FavouriteRestaurantsComponent;
  let fixture: ComponentFixture<FavouriteRestaurantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriteRestaurantsComponent,NavComponent ],
      imports:[HttpModule,RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
