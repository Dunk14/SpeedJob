import {Component, Injectable, OnInit} from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

// Service
import { AccountService } from "../services/account.service";

@Component({
    selector: 'sign-in',
    templateUrl: 'sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
})

@Injectable()
export class SignInComponent implements OnInit {
    login: string;
    password: string;
    isLoading: boolean = false;

    constructor (private accountService: AccountService,
                 private router: Router) {}

    ngOnInit() {}

    logIn() {
        this.isLoading = true;

        this.accountService.logIn(this.login, this.password)
         .subscribe((res: Response) => {
            console.log(res);
             /**
             * Account has been validated
             */
             if ((res.json()).success == true) {

                 localStorage.setItem('speedjob', JSON.stringify(res.json()));
                 this.router.navigate(['/home']);

             } else {
                 console.log(res.json());
             }
         });
    }
}