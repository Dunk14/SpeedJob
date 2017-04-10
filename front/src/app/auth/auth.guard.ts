import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {
        if (localStorage.getItem('speedjob')) {
            let sj = JSON.parse(localStorage.getItem('speedjob'));

            if (sj.token) {
                // logged in so return true
                return true;
            }
        } else {
            // not logged in so redirect to login page
            this.router.navigate(['/signIn']);
            return false;
        }
    }
}