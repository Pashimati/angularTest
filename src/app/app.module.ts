import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ListComponent } from './pages/list/list.component';
import { TableComponent } from './components/table/table.component';
import {HttpClientModule} from "@angular/common/http";
import { MainComponent } from './pages/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ListComponent,
    TableComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
