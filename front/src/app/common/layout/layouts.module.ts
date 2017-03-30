import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { MdlModule } from 'angular2-mdl';

import { basicComponent } from "./basic.component";
import { blankComponent } from "./blank.component";

import { HeaderComponent } from '../header/header.component';

// Elements of complete layout

@NgModule({
    declarations: [ basicComponent, blankComponent, HeaderComponent ],
    imports     : [
        BrowserModule,
        RouterModule,
        MdlModule
    ],
    exports     : [ basicComponent, blankComponent ]
})

export class LayoutsModule {}
