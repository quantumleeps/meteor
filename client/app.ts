import 'reflect-metadata';
import { Component, provide } from '@angular/core';
import { bootstrap } from 'angular2-meteor-auto-bootstrap';
import { provideRouter, RouterConfig, ROUTER_DIRECTIVES } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { ViewPlantsList } from './imports/view-plants-list/view-plants-list.ts';
import { ViewPlantDetails } from './imports/view-plant-details/view-plant-details.ts';


import template from './app.html';
 
@Component({
  selector: 'app',
  template,
  directives: [ROUTER_DIRECTIVES]
})
class App {}

const routes: RouterConfig = [
  { path: '',   component: ViewPlantsList},
  { path: 'plant/:plantId',   component: ViewPlantDetails}
];

const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];



bootstrap(App, [APP_ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]);
