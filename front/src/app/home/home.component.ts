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

    constructor(private accountService: AccountService,
                private router: Router) {}

    ngOnInit() {
        /**
         * Check that there's a user connected
         */
        let user = JSON.parse(localStorage.getItem('speedjob'));
        if (!user) {
            this.router.navigate(['/signIn']);
        }
    }

    logOut() {
        this.accountService.logOut();
    }

}