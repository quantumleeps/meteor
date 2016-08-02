import { Component /*, NgZone*/ } from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES, Router } from '@angular/router';
import { Tracker } from 'meteor/tracker';
import { Plants } from '../../../collections/plants.ts';


import template from './new-page.html';

@Component({
    selector: 'new-page',
    template,
    directives: [ROUTER_DIRECTIVES]
})
export class NewPage {
    

    constructor(private route: ActivatedRoute, /*private ngZone: NgZone,*/ public router: Router) {}
    
    ngOnInit() {
        console.log(this.router.routerState)
    }


}