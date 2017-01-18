import { NgModule } from '@angular/core';
import { AppComponent } from "./app";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from "@angular/http";
import { routing } from "./app.routes";
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ChartsModule } from 'ng2-charts/ng2-charts'
import { MomentModule } from 'angular2-moment';
import { ModalModule } from 'ng2-bootstrap';
import { MaterialModule } from '@angular/material';

// App views
import { HomeComponent } from "./home/home.component";
import { SignInComponent } from "./sign-in/sign-in.component";

// App elements
import { NavigationComponent } from "./elements/navigation/navigation.component";
import { FooterComponent } from "./elements/footer/footer.component";
import { TopnavbarComponent } from "./elements/topnavbar/topnavbar.component";

// Services
import { AccountService } from './services/account.service';

@NgModule({

    declarations: [
        AppComponent,
        HomeComponent,
        SignInComponent,
        NavigationComponent,
        FooterComponent,
        TopnavbarComponent
    ],

    imports     : [

        // Angular modules
        BrowserModule,
        HttpModule,
        JsonpModule,
        FormsModule,
        ChartsModule,
        MomentModule,
        ModalModule.forRoot(),
        MaterialModule.forRoot(),

        routing
    ],

    providers   : [{
        provide: LocationStrategy,
        useClass: HashLocationStrategy },
        AccountService
    ],

    bootstrap   : [AppComponent]
})

export class AppModule {}
