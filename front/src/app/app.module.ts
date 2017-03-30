import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdlModule } from 'angular2-mdl';
import { routing } from "./app.routes";
import { AppComponent } from './app.component';

// Layout
import { LayoutsModule } from './common/layout/layouts.module';

// App views
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProfileComponent } from './profile/profile.component';

// App services
import { AuthGuard } from './auth/auth.guard';
import { AccountService } from'./services/account.service';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SignInComponent,
        ProfileComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MdlModule,
        LayoutsModule,
        routing
    ],
    providers: [
        AuthGuard,
        AccountService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
