import { Component, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tracker } from 'meteor/tracker';
import {Plants} from '../../../collections/plants.ts';


import template from './view-plant-details.html';

@Component({
    selector: 'view-plant-details',
    template
})
export class ViewPlantDetails {
    plantId: string;
    plant: Object;

    constructor(private route: ActivatedRoute, private ngZone: NgZone) {}
    
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.plantId = params['plantId'];

            Tracker.autorun(() => {
                this.ngZone.run(() => {
                    this.plant = Plants.findOne(this.plantId)
                });
            });
        });
    }
}