import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from "../services/account.service";

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
})

@Injectable()
export class HomeComponent implements OnInit {

    private user: any;

    constructor(private router: Router) {}

    ngOnInit() {
        /**
         * Check that there's a user connected
         */
        this.user = JSON.parse(localStorage.getItem('user'));
        //if (!this.user) {

        this.router.navigate(['/signIn']);

        //}
    }

}