import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { WhatisinforyouComponent } from './whatisinforyou/whatisinforyou.component';
import { SecondPageComponentComponent } from './second-page-component/second-page-component.component';
import { SalesComponentComponent } from './sales-component/sales-component.component';
import { InfoComponentComponent } from './info-component/info-component.component';
import { ThirdPageComponentComponent } from './third-page-component/third-page-component.component';
import { ForthPageComponentComponent } from './forth-page-component/forth-page-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    WhatisinforyouComponent,
    SecondPageComponentComponent,
    SalesComponentComponent,
    InfoComponentComponent,
    ThirdPageComponentComponent,
    ForthPageComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
