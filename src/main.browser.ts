import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { enableProdMode } from '@angular/core';
import { AppModule } from "./app/app.module";

/*
 * Bootstrap Angular app with a top level NgModule
 */

platformBrowserDynamic().bootstrapModule(AppModule);