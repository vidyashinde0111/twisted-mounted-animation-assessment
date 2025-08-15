import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { DetailsView } from './component/details-view/details-view';
import { TableView } from './component/table-view/table-view';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    TableView,
    DetailsView
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
