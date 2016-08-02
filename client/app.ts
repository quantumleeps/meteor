import 'reflect-metadata';
import { Component } from '@angular/core';
import { bootstrap } from 'angular2-meteor-auto-bootstrap';
import { Plants }   from '../collections/plants';
import { Mongo }     from 'meteor/mongo';
import { AddPlantsForm } from './imports/add-plants-form/add-plants-form';


import template from './app.html';
 
@Component({
  selector: 'app',
  template,
  directives: [AddPlantsForm]
})
class App { 

    plants: Mongo.Cursor<Object>;
 
  constructor () {
    this.plants = Plants.find();
  }
}
 
bootstrap(App);