import 'reflect-metadata';
import { Component } from '@angular/core';
import { FormBuilder, ControlGroup, Validators, Control } from '@angular/common';
import { Plants } from '../../../collections/plants.ts';

import template from './add-plants-form.html';

@Component({
  selector: 'add-plants-form',
  template
})
export class AddPlantsForm { 
    addPlantsForm: ControlGroup;

    constructor() {
        let fb = new FormBuilder();

        this.addPlantsForm = fb.group({
            name: ['', Validators.required],
            description: [''],
            location: ['', Validators.required]
        });
    }

    addPlant(plant) {
        if (this.addPlantsForm.valid) {
            Plants.insert({
                name: plant.name,
                description: plant.description,
                location: plant.location
            });

            (<Control>this.addPlantsForm.controls['name']).updateValue('');
            (<Control>this.addPlantsForm.controls['description']).updateValue('');
            (<Control>this.addPlantsForm.controls['location']).updateValue('');
        }
    }
}