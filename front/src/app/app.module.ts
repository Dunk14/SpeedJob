import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from "./app.routes";

import { AppComponent } from './app.component';

// App views
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';

// App services
import { AccountService } from'./services/account.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
