import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from '@angular/core';

import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from "./home/home.component";
import { SignInComponent } from "./sign-in/sign-in.component";

export const ROUTES:Routes = [
    // Main redirect
    {path: '', redirectTo: 'signIn', pathMatch: 'full'},

    // App views
    {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'signIn', component: SignInComponent},

    // Handle all other routes
    {path: '**',    component: SignInComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(ROUTES);