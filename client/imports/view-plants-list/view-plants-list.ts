import 'reflect-metadata';
import { Component } from '@angular/core';
import { Plants }   from '../../../collections/plants';
import { AddPlantsForm } from '../add-plants-form/add-plants-form';
import { Mongo }     from 'meteor/mongo';
import { ROUTER_DIRECTIVES }  from '@angular/router';


import template from './view-plants-list.html';

@Component({
    selector: 'view-plants-list',
    template,
    directives: [AddPlantsForm, ROUTER_DIRECTIVES]
})

export class ViewPlantsList {
  plants: Mongo.Cursor<Plant>;
 
  constructor() {
    this.plants = Plants.find();
  }
 
  removeParty(plant) {
    Plants.remove(plant._id);
  }
}