import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { smoothlyMenu } from '../../../app/app.helpers';
declare let jQuery:any;

@Component({
    selector: 'topnavbar',
    templateUrl: 'topnavbar.component.html',
    styleUrls: ['topnavbar.component.scss']
})
export class TopnavbarComponent {

    constructor (private router: Router) {}

    activeRoute(routename: string): boolean{
        return this.router.url.indexOf(routename) > -1;
    }

    toggleNavigation(): void {
        jQuery("body").toggleClass("mini-navbar");
        smoothlyMenu();
    }

}