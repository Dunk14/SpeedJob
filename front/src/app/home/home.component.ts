import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
})

@Injectable()
export class HomeComponent implements OnInit {

    constructor(private router: Router) {}

    ngOnInit() {}

    public routingFunction(path: string) {
        console.log(path);
    }
}