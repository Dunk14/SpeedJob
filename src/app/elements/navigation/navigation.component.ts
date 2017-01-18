import { Component, Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { AccountService } from '../../services/account.service';

declare let jQuery:any;

@Component({
    selector: 'navigation',
    templateUrl: 'navigation.component.html',
    styleUrls: ['navigation.component.scss']
})

@Injectable()
export class NavigationComponent {

    private errorMessage: string;

    private user: any;
    public userDetails: any = [];

    constructor(@Inject(AccountService) private accountService: AccountService,
                private router: Router) {

        this.user = JSON.parse(localStorage.getItem('user'));

        if (!this.user) {
            this.router.navigate(['/signIn']);
        } else {
            this.accountService.getUserDetails(this.user.account_id)
                .subscribe(
                    userDetails => {
                        this.userDetails = userDetails[0];
                    },
                    error => this.errorMessage = <any>error
                );
        }
    }

    ngAfterViewInit() {
        jQuery('#side-menu').metisMenu();
    }

    activeRoute(routename: string): boolean{
        return this.router.url.indexOf(routename) > -1;
    }

    signOut() {
        this.accountService.logOut();
    }

}