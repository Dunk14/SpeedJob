import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from '../../services/account.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['header.component.scss']
})

@Injectable()
export class HeaderComponent implements OnInit {

    constructor(private accountService: AccountService,
                private router: Router) {}

    ngOnInit() {

    }

    logOut() {
        this.accountService.logOut();
    }

}
