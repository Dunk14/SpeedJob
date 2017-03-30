import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';

// Service
import { AccountService } from '../services/account.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})

@Injectable()
export class ProfileComponent implements OnInit {

    constructor(private accountService: AccountService,
                private router: Router) {}

    ngOnInit() {

    }

}
