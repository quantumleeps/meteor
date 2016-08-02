import { Component, NgZone } from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES, Router } from '@angular/router';
import { Tracker } from 'meteor/tracker';
import {Plants} from '../../../collections/plants.ts';


import template from './view-plant-details.html';

@Component({
    selector: 'view-plant-details',
    template,
    directives: [ROUTER_DIRECTIVES]
})
export class ViewPlantDetails {
    plantId: string;
    plant: Object;

    constructor(private route: ActivatedRoute, private ngZone: NgZone, public router: Router) {}
    
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

    savePlant(plant) {
        Plants.update(plant._id, {
            $set: {
                name: plant.name,
                description: plant.description,
                location: plant.location
            }
        })
        this.router.navigate(['/']);
    }
}