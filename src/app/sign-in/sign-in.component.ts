import {Component, Inject, Injectable, OnInit} from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

// Service
import { AccountService } from "../services/account.service";

@Component({
    selector: 'sign-in',
    templateUrl: 'sign-in.component.html',
    styleUrls: ['./sign-in.scss']
})

@Injectable()
export class SignInComponent implements OnInit {
    email: string;
    password: string;
    user: any = [];
    isLoading: boolean = false;

    constructor (@Inject(AccountService) private accountService: AccountService,
                 private router: Router) {}

    ngOnInit() {
        /**
         * GET user data from localStorage
         */
        this.user = JSON.parse(localStorage.getItem('user'));

        /**
         * If user's connected, he's redirected to Home
         */
        if (this.user) {
            this.router.navigate(['/home']);
        }
    }

    logIn() {
        this.isLoading = true;

        /*this.accountService.logIn(this.email, this.password)
            .subscribe((res: Response) => {
                /!**
                 * Account has been validated
                  *!/
                if ((res.json()).success == true) {
                    this.user = res.json();
                    localStorage.setItem('user', JSON.stringify(res.json()));
                    this.router.navigate(['/home']);
                } else {
                //    TODO
                }
            }
        );*/
        console.log(this.password);
        if (this.email == "kilyan.fossey@imie-rennes.fr" && this.password == "speedjob") {
            let user = {
              id: 0
            };
            localStorage.setItem('user', JSON.stringify(user));
            this.router.navigate(['/home']);
        }
    }
}