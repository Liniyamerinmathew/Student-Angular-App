import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentEntryComponent } from './student-entry/student-entry.component';

import { StudentSearchComponent } from './student-search/student-search.component';

import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';
const myRoute:Routes=[
  {
    path:"",
    component:StudentEntryComponent
  },
  {
    path:"search",
    component:
  },
  {
    path:"delete",
    component:
  },
  {
    path:"viewall",
    component:
  }
  
]


@NgModule({
  declarations: [
    AppComponent,
    StudentEntryComponent,

    StudentSearchComponent

    NavigationComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
