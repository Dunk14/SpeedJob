import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Http, RequestOptions, Headers } from '@angular/http';
import { speedJobApi } from '../globals';

@Injectable()
export class AccountService {
    private signInUrl = speedJobApi + '/authenticate';
    private userDetailsUrl = speedJobApi + '/account';

    constructor(@Inject(Http) private http: Http,
                private router: Router) {}

    /**
     * Sign user in
     * @param login
     * @param password
     * @returns {Observable<Response>}
     */
    logIn(login: string, password: string) {
        let body = 'login=' + login + '&password=' + password;
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.signInUrl, body, options);
    }

    /**
     * Sign user out
     */
    logOut() {
        localStorage.removeItem('speedjob');
        this.router.navigate(['/signIn']);
    }

    /**
     * Get user details
     */
    /*getUserDetails(account_id: string) {
        return this.http.get(this.userDetailsUrl + '/'/!* + account_id*!/)
            .map(res => res.json());
    }*/
}