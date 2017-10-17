import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedRestaurantComponent } from './detailed-restaurant.component';
import { ZomatoService } from '../services/zomato.service';
import { HttpModule } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Location, LocationStrategy }                 from '@angular/common';
import { ActivatedRouteStub } from './router-stubs';
import { RouterTestingModule } from '@angular/router/testing';

describe('DetailedRestaurantComponent', () => {
  let component: DetailedRestaurantComponent;
  let fixture: ComponentFixture<DetailedRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ZomatoService,
        {
          provide: ActivatedRoute, useValue: {ActivatedRouteStub
          }},Location,LocationStrategy
      ],
      imports:[HttpModule,RouterTestingModule],
      declarations: [ DetailedRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
