import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { ServicesService } from 'app/services/services.service';
import { HttpLink } from 'apollo-angular/http';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { InMemoryCache } from '@apollo/client/cache';
import { HttpClientModule } from '@angular/common/http';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  let service: ServicesService
  var originalTimeout

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports:[HttpClientModule,ApolloModule],
      providers:[
         ServicesService,
        {
          provide: APOLLO_OPTIONS,
          useFactory: (httpLink: HttpLink) => {
            return {
              cache: new InMemoryCache(),
              link: httpLink.create({
                uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
              }),
            };
          },
          deps: [HttpLink],
        },]
    })
    .compileComponents();
    service = TestBed.inject(ServicesService)
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
     originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;

  });

  afterEach(function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });

  fit('Test case for the services', function() {
     expect(service).toBeTruthy();
  });


});
