import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassesComponent } from './components/classes/classes.component';
import { ParentComponent } from './components/parent/parent.component';
import { FirstChildComponent } from './components/firstchild/firstchild.component';
import { SecondChildComponent } from './components/secondchild/secondchild.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        ClassesComponent,
        ParentComponent,
        SecondChildComponent,
        FirstChildComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
