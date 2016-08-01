import 'reflect-metadata';
import { Component } from '@angular/core';
import { bootstrap } from 'angular2-meteor-auto-bootstrap';
import { Plants }   from '../collections/plants';
import { Mongo }     from 'meteor/mongo';


import template from './app.html';
 
@Component({
  selector: 'app',
  template
})
class App { 

    plants: Mongo.Cursor<Object>;
 
  constructor () {
    this.plants = Plants.find();
  }
}
 
bootstrap(App);