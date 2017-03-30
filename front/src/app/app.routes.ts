import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from '@angular/core';

import { basicComponent } from './common/layout/basic.component';
import { blankComponent } from './common/layout/blank.component';

import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from "./home/home.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { ProfileComponent } from './profile/profile.component';

export const ROUTES:Routes = [
    // Main redirect
    {path: '', redirectTo: 'signIn', pathMatch: 'full'},

    // App sign-in
    {
        path: '', component: blankComponent,
        children: [
            {path: 'signIn', component: SignInComponent}
        ]
    },

    // App views
    {
        path: '', component: basicComponent,
        children: [
            {path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
            {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }
        ]
    },

    // Handle all other routes
    {path: '**',    component: SignInComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(ROUTES);