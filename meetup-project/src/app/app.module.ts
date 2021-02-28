import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MeetupComponent } from './meetup/meetup.component';
import { MeetupItemComponent } from './meetup/meetup-list/meetup-item/meetup-item.component';
import { MeetupDetailComponent } from './meetup/meetup-detail/meetup-detail.component';
import {MeetupListComponent} from './meetup/meetup-list/meetup-list.component';
import { SearchComponent } from './search/search.component';
import { PersonListComponent } from './meetup/meetup-detail/person-list/person-list.component';
import { PersonItemComponent } from './meetup/meetup-detail/person-list/person-item/person-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MeetupListComponent,
    MeetupComponent,
    MeetupItemComponent,
    MeetupDetailComponent,
    SearchComponent,
    PersonListComponent,
    PersonItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
